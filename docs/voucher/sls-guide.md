---
id: sls-guide
title: Guide
sidebar_label: Guide
---

## 1. Prerequisites

Before using this the api G-Loot needs to do the following:

1. Register your game on our service. For this we might need some display assets from you, such as a logo and url to your website.
2. Add and configure one or more leaderboards for your game to use.
3. Deliver a service account token for our dev and production environments.

Depending on how your game works, there might be multiple ways in which our leaderboard-service could be used.

## Basic usage

### Report the scores

Once some event has happened that produced a sortable metric, for example when a match has been completed or an achievement has been fulfilled, that metric should be reported as a score to the relevant leaderboard. This is done via a `POST` request to the `score`-endpoint. The score should be posted to the specific game and leaderboard-id specified by G-Loot.

Each leaderboard has a retry strategy and number of retries configured, these two properties will together dictate the constraints of the score reporting-process. See the [retries](#retries)-section for further information regarding this.

### (Optional) Gathering missing properties

If the vouchers should be delivered automatically by us when the challenge is done, an email needs to be submitted in the call. Also, a display name that should be shown on the leaderboard needs to be submitted. This information might already be present in the game, by authentication (3-party or local) or otherwise. If they are not, the information could be gathered by showing a modal when the metric is gathered with input fields for these properties.

### Showing the leaderboard

In the response body of the `POST` call, some [properties will be returned](sls-api.md#report-a-score-to-a-leaderboard) for optional presentation in the game. Among these are the URL to the web page displaying the leaderboard. This page can be linked to or embedded in the game after the POST wall was made. Optionally, the link could be delivered to the player-base by other means, for example by sharing it on social media.

### Retries

There is three retry strategies that could be used for a leaderboard:

- `DISABLED` - scores for a specific player can only be submitted once (i.e. they only get one attempt). If this strategy is used the `numberOfRetries`-property will be ignored.
- `REPLACE_SCORE` - scores for a specific player can be submitted multiple times, each new score will replace the other, regardless if the value is lower or not. The amount of times the score can be resubmitted will be limited by the `numberOfRetries`-property.
- `REPLACE_IF_BETTER` - same as `REPLACE_SCORE`, but the score will only be replaced if the result is better.

One of these strategies will be chosen when G-Loot configures the leaderboard.

## Advanced Usage

### New leaderboards without updating game

A game could have several different leaderboards active at the same time.

Instead of hardcoding the ids to the leaderboard, a call could be made to fetch all currently active leaderboards for the game, select the relevant one (in a way suitable to the challenge and game) and report the score there.

For example, when a leaderboard is configured, an id corresponding to an in-game achievement might be put in the `externalReference` field on the leaderboard. The game could then, whenever an achievement is fulfilled, fetch all the active challenges and see if there is any leaderboard with that achievement's id specified and report the score to that leaderboard. New leaderboards could then be configured and run without any further development in the game.

### Native leaderboard UI

Some games might want to hold recurring promotional events, such as a world championship every year, or quarterly tournaments. In this case, it might look more suitable and professional to show the leaderboard natively in the game with a custom design instead of redirecting the users to our default leaderboard page.

To do this, the leaderboard could be fetched form the `GET /score`-endpoint and a custom UI built to display this data.

### Grouping leaderboards

Leaderboards have the optional `type`-property. This property is meant to be used to group several leaderboards under a certain type. We use this property to visually group the leaderboards on our game-specific page. Some games might want to programatically show all active leaderboards (probably presented conceptually as tournaments/challenges) natively in the game. In this case the `type`-property could be used as well for the same visual grouping.
