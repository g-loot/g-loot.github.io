---
id: sls-api
title: API Specification
sidebar_label: API specification
---

## Overview

### Base urls:

- dev: https://gloot-sls-dev.ey.r.appspot.com/api/v1
- prod: https://gloot-sls.ey.r.appspot.com/api/v1

### Endpoints

- [Get all leaderboards for a game](#get-all-leaderboards-for-a-game) : `GET /leaderboard/:gameId/`
- [Get a leaderboard](#get-a-leaderboard) : `GET /leaderboard/:gameId/:leaderboardId/`
- [Get all reported scores for a leaderboard](#get-all-reported-scores-for-a-leaderboard) : `GET /leaderboard/:gameId/:leaderboardId/score`
- [Report a score to a leaderboard](#report-a-score-to-a-leaderboard) : `POST /leaderboard/:gameId/:leaderboardId/score/`

### Response data

- [Leaderboard](#leaderboard)
- [Score](#score)

## Authorization

All endpoints require a service account token in the `Authorization`-header. The token is a JWT bearer token that should be kept secret from the client. The token should be preceeded by the token type `Bearer` in the header.

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

### Get all leaderboards for a game

Fetches all leaderboards for a specific game. Will return a paginated list. The optional `?state=active` query param could be used to only fetch ongoing leaderboards.

**URL** : `GET /leaderboard/:gameId`

**Parameters**:
| Name | Type | required | Value | Default | Description |
|--------|-------|----------|-----------------------------|---------------|---------------------------------------------------------------------------------------------------------------|
| gameId | **path** | **yes** | string | - | The game id for which the leaderboards should be fetched. |
| limit | query | no | int | 100 | For pagination. The maximum number of entries that the answer can contain. |
| cursor | query | no | string | - | For pagination. The pointer to the next set of entries to retrieve. |
| state | query | no | "active" - "inactive" - "all" | "all" | For filtering the entries by a specific state. State `active` only fetches ongoing leaderboards. |
| type | query | no | string | - | For filtering the entries by type. Enables the consumer to make arbitrary groups based on a free-text string. |

**Success response 200**:

```
{
  "nextCursor": "string",
  "hasMore": true,
  "currentCursor": "string",
  "leaderboards": [Leaderboard]
}
```

### Get a leaderboard

Get a specific leaderboard by id.

**URL** : `GET /leaderboard/:gameId/:leaderboardId`

**Parameters**:
| Name | Type | required | Value | Default | Description |
|------|------|----------|-------|---------|-------------|
| gameId | **path** | **yes** | string | - | The game id to which the leaderboard belongs. |
| leaderboardId | **path** | **yes** | string | - | The id of the leaderboard that should be fetched |

**Success response 200**: [Leaderboard](#Leaderboard)

### Get all reported scores for a leaderboard

Returns a paginated list of all currently reported scores of the leaderboard.

**URL** : `GET /leaderboard/:gameId/:leaderboardId/score`

**Parameters**:
| Name | Type | required | Value | Default | Description |
|------|------|----------|-------|---------|-------------|
| gameId | **path** | **yes** | string | - | The game id to which the leaderboard belongs. |
| leaderboardId | **path** | **yes** | string | - | The id of the leaderboard that should be fetched |
| limit | query | no | int | 100 | For pagination. The maximum number of entries that the answer can contain. |
| cursor | query | no | string | - | For pagination. The pointer to the next set of entries to retrieve. |

**Success response 200**:

```
{
  "nextCursor": "string",
  "hasMore": true,
  "currentCursor": "string",
  "scores": [
    {
      "score": "string",
      "name": "string"
    }
  ]
}
```

### Report a score to a leaderboard

Submits a result that should be displayed on the leaderboard.

**URL** : `POST /leaderboard/:gameId/:leaderboardId/score`

**Parameters**:
| Name | Type | required | Value | Default | Description |
|------|------|----------|-------|---------|-------------|
| gameId | **path** | **yes** | string | - | The game id to which the leaderboard belongs. |
| leaderboardId | **path** | **yes** | string | - | The id of the leaderboard that should be fetched |

**Request body**:

```
{
  /* The value that will be visible on the leaderboard. */
  "displayValue": "10/15/2020 @ 1:47pm (UTC)",
  /* The name of the user that will be visible on the leaderboard. */
  "displayName": "Fresh Gandalf 420",
  /* The value that the leaderboard will be sorted on, must be an integer. */
  "sortingValue": 1602769646,
  /* The email that the voucher will be sent to once the tournament is over.
  This value will not be displayed publicly. */
  "email": "string"
}
```

**Success response 200**:

```
{
  "result": {
    /* Some leaderboards can be configured to have multiple tires (or entries) per user,
    all the tries that user has made are contained here.*/
    "entries": [
      {
        "displayValue": "string",
        "date": 0,
        "sortingValue": 0
      }
    ],
    "displayName": "string",
    "bestScore": {
      "displayValue": "string",
      "date": 0,
      "sortingValue": 0
    },
    "email": "string"
  },
  /* the url to the web page that will show the leaderboard */
  "leaderboardUrl": "string"
}
```

## Data types

### Leaderboard

```
{
  "gameId": "wonky-weavers",
  "numberOfParticipants": 23,
  "numberOfRetries": 0,
  "endDate": 1602769646,
  "maximumNumberOfWinners": 200,
  "icon": "https://path.to/my-game-icon.png",
  "description": "The 200 people to complete the whole campaign on easy in 60 minutes gets $20!",
  "type": "achievement-goldrush",
  "isActive": true,
  "url": "https://cool.games/wonky-weavers",
  "scoreUpdatedDate": 1602769646,
  "name": "The one hour rush",
  "id": "the-one-hour-rush",
  "retryStrategy": "DISABLED",
  "startDate": 1602769646
}
```

### Score

```
{
  "score": "14",
  "name": "Tiny Tim"
}
```
