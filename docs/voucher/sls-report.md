---
id: sls-report
title: Report score
sidebar_label: Report score
---

## Overview

In case of a C2B (Client to backend) communication there is sometimes a need to improve upon the security when it comes to reporting the score.
Without these precautions a user could quite easily sniff the data being sent by the game client and modify it, improving on their own score.

We do this by simply adding a header [X-Gloot-SLS-Checksum](#x-gloot-sls-checksum).
This [checksum](#calculate-the-checksum) will verify the validity of the payload.

### Secret / Private Key

A secret / private key needs to be created by G-Loot and will be common for all your leaderboards. This private key is preshared with the game developer and must be included within the client software generating the outbound HTTP requests.
This *MUST* be hidden from the users. If some means of obfuscation/security exists, please employ it.

### X-Gloot-SLS-Checksum

| Header | Value |
|------|------|
|X-Gloot-SLS-Checksum| [ALGORITHM](#algorithm):[GAME](#game):[KID](#kid):[SALT](#salt):[CHECKSUM](#calculate-the-checksum)|

### ALGORITHM
This selects which algorithm the checksum has been calculated with.
Below are a list of the supported algorithms.

| Value | Name | Lengths | Security level |
|------|------|-----|-----|
|MD5 | Message Digest | 32 digits long | *not recommended*|
|SHA-1| Secure Hash Algorithm 1 | 40 digits long | *not recommended*|
|SHA-256| Secure Hash Algorithm 2 | 64 digits long| good |
|SHA-512| Secure Hash Algorithm 2 | 128 digits long | **recommended**|

Please use the highest security algorithm, that is available for your platform.

### GAME
This is the name of your game as provided by G-Loot.

### KID
This is the key id as provided by G-Loot.
You may have multiple keys in order to separate them between clients etc.
For instance, if you have a PC client and a MAC client you might want to use separate private keys for those clients. This will allow us to revoke a private key and just affect 50% of the user base instead of 100%.

### SALT
The salt is free for the customer to decide upon, it is important that it varies between calls and is very unlikely to be the same. There is no technical limitation which states that it needs to be unique.
This is used in order to avoid generating multiple known requests with known field variability, which could be used for trying to crack the secret/private key.

Example of a basic salt could be, in java.
```
String salt = UUID.randomUUID().toString();
// or
String salt = "" + System.currentTimeMillis();
```

Make sure the salt contains no special characters that might break the means of transport, HTTP request header.
Also make sure it does not contain the [X-Gloot-SLS-Checksum](#x-gloot-sls-checksum) separator `:` (colon).

### Calculate the checksum
The checksum should be calculated using `algorithm(SALT + PAYLOAD + PRIVATE_KEY)`.

## Tying it all together

In order to improve on readability, the payload will be non json-compliant in this example. Please note that you must provide a properly escaped json.

### Pseudo-java
```
private static final String PRIVATE_KEY = "....";

String payload = {
          displayValue:20,
          sortingValue: 20,
          displayName: "Tommy",
          email: "tommy@gloot.com"
};
String salt = UUID.randomUUID().toString();

// Generate the checksum
String stringToCheck = salt + payload + PRIVATE_KEY;
byte[] digest = MessageDigest.getInstance("SHA-512").digest(stringToCheck);
String checksum = stringToHex(digest);

// Send the result to the servers
http("https://gloot-sls-dev.ey.r.appspot.com/api/v1/leaderboard/duke-nukem-3d/bubble-gums-chewed-leaderboard")
   .header("X-Gloot-SLS-Checksum", "SHA-512:game:a" + salt + checksum)
   .post(payload);
```

## HTTP Example
```
POST /leaderboard/duke-nukem-3d/bubble-gums-chewed-leaderboard/score HTTP/1.1
Host: gloot-sls-dev.ey.r.appspot.com
Accept: */*
Authorization: Bearer .....
x-gloot-sls-checksum: sha-512:game:a:1605019728:50d21ed8cdf7b23033dcb6c85dce4cfdf17b6507851ae175dedd91877231a69672b6aa2f57395e080c2e12f45d4e394994e821d15b73da0ece0c1d57212ef3e8
Content-Length: 87
Content-Type: application/json

{"sortingValue":20,"displayValue":"20","email":"tommy@gloot.com","displayName":"Tommy"}
```
In this example the private key value of `gUmNg8MQksDLVvHtd7YfuyPPtB0KtzX7gBGm0tZpdhaxmJesvH` was used.

## Shell Example

If we take a look at the [example above](#http-example), we can take all the values from there and verify that we get the same checksum.

```
SALT=1605019728
PAYLOAD='{"sortingValue":20,"displayValue":"20","email":"tommy@gloot.com","displayName":"Tommy"}'
PRIVATE_KEY='gUmNg8MQksDLVvHtd7YfuyPPtB0KtzX7gBGm0tZpdhaxmJesvH'

echo -n "${SALT}${PAYLOAD}${PRIVATE_KEY}" | sha512sum
```
