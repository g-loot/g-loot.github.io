---
id: compliance-api
title: API Specification
sidebar_label: API specification
---

## Overview

### Base urls:

- dev: https://compliance-gloot-dev.appspot.com/api/v1
- prod: https://compliance-gloot.appspot.com/api/v1

### Endpoints

- [Get status](#get-status) : `GET /status`
- [Get geodata](#get-geodata) : `GET /geodata`

### Response data

- [Status](#status)
- [Geodata](#geodata)

## Authorization

When requesting status or geodata, if the `ip`-query parameter is omitted, the call will use the ip-adress of the machine making the call. In this case no authentication is required.

When requesting status or geodata for another IP adress than the machine making the call, the request needs a service account token in the `Authorization`-header. The token is a JWT bearer token that should be kept secret from the client. The token should be preceeded by the token type `Bearer` in the header.

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

### Get status

Returns whether or not a specific IP adress is allowed to compete on our platform. If available, the geodata of the ip will be passed for convenience.

**URL** : `GET /status`

**Authentication required** : If `ip`-query parameter is specified with an ip-adress other than the machine making the call, yes.

**Parameters**:
| Name | Type | required | Value | Default | Description |
|------|------|----------|-------|---------|-------------|
| ip | query | no | string | - | The ip adress for which the status should be fetched. Defaults to the ip of the caller. |

**Success response 200**: [Status](#status)

**Error response 403**: no content (faulty or missing authorization token)

**Error response 422**: no content (invalid IP adress provided)

### Get geodata

Returns the location data of a specific IP adress.

**URL** : `GET /geodata`

**Authentication required** : If `ip`-query parameter is specified with an ip-adress other than the machine making the call, yes.

**Parameters**:
| Name | Type | required | Value | Default | Description |
|------|------|----------|-------|---------|-------------|
| ip | query | no | string | - | The IP adress for which the geodata should be fetched. Defaults to the ip of the caller. |

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
