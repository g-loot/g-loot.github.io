---
id: compliance-api
title: API Specification
sidebar_label: API specification
---

## Overview

### Base urls:

- dev: xxx
- prod: xxx

### Endpoints

- [Get status for caller](#get-status-for-caller) : `GET /status`
- [Get status for ip](#get-status-for-ip) : `GET /status/:ip`
- [Get geodata for caller](#get-geodata-for-caller) : `GET /geodata`
- [Get geodata for ip](#get-geodata-for-ip) : `GET /geodata/:ip`

### Response data

- [Status](#status)
- [Geodata](#geodata)

### Response Headers

Each API-response will contain these headers.

| name                    | type   | example       | description                                                  |
| ----------------------- | ------ | ------------- | ------------------------------------------------------------ |
| x-started-processing-at | number | 1603188776750 | Epoch time (ms) when the server started processing the call  |
| x-ended-processing-at   | number | 1603188776750 | Epoch time (ms) when the server finished processing the call |

## Authorization

The endpoints requesting data for the caller is open.

The endpoints that fetch information by for another IP adress than the machine making the call needs a service account token in the `Authorization`-header. The token is a JWT bearer token that should be kept secret from the client. The token should be preceeded by the token type `Bearer` in the header.

Pseudo code JSON example:

```
{
  "headers": {
    "Authorization": "Bearer ${your-service-account-token-here}",
    "Content-Type": "application/json"
  }
}
```

## Endpoints

### Get status for caller

Returns whether or not a client is allowed to compete on our platform based on the IP adress of the device making the call. If available, the geodata of the ip will be passed for convenience.

**URL** : `GET /status`

**Authentication required** : no

**Success response 200**: [Status](#status)

### Get status for ip

Returns whether or not a specific IP adress is allowed to compete on our platform. If available, the geodata of the ip will be passed for convenience.

**URL** : `GET /status/:ip`

**Authentication required** : yes

**Parameters**:
| Name | Type | required | Value | Default | Description |
|------|------|----------|-------|---------|-------------|
| ip | path | yes | string | - | The ip adress for which the status should be fetched |

**Success response 200**: [Status](#status)
**Error response 403**: no content (faulty or missing authorization token)
**Error response 422**: no content (invalid IP adress provided)

### Get geodata for caller

Returns the location data of the caller. Based on the IP adress of the device making the call.

**URL** : `GET /geodata`

**Authentication required** : no

**Success response 200**: [Geodata](#geodata)
**Error response 404**: no content (geodata does not exist for the given resource)

### Get geodata for ip

Returns the location data of a specific IP adress.

**URL** : `GET /geodata/:ip`

**Authentication required** : yes

**Parameters**:
| Name | Type | required | Value | Default | Description |
|------|------|----------|-------|---------|-------------|
| ip | path | yes | string | - | The IP adress for which the geodata should be fetched |

**Success response 200**: [Geodata](#geodata)
**Error response 404**: no content (geodata could not be found)
**Error response 403**: no content (faulty or missing authorization token)
**Error response 422**: no content (invalid IP adress provided)

## Data types

### Status

| Property | Nullable | Type                | Description                                                                     |
| -------- | -------- | ------------------- | ------------------------------------------------------------------------------- |
| blocked  | no       | boolean             | True if the IP adress is completely blocked from participating on our platform. |
| geodata  | yes      | [Geodata](#geodata) | If available, the location data for the IP adress.                              |

#### JSON example

```
{
  "blocked: true"
  "geodata": {
    "alpha2": "SE"
    "country" : "sweden"
    "region"  : null
    "city"    : null
  }
}
```

### Geodata

| Property | Nullable | Type   | Description                    |
| -------- | -------- | ------ | ------------------------------ |
| alpha2   | no       | string | ISO 3166-1 alpha-2.            |
| country  | no       | string | Human readable country name.   |
| region   | yes      | string | Region within the country.     |
| city     | yes      | string | City name. Omitted if not set. |

#### JSON example

```
{
  "alpha2": "SE"
  "country" : "sweden"
  "region"  : "Stockholm"
  "city"    : "Stockholm"
}
```
