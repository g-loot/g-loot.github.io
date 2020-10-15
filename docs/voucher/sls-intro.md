---
id: sls-intro
title: Simple leaderboard service
sidebar_label: Introduction
---

This section is relevant to you if your game:

- does not have a backend
- is a single player game
- use a third party service for matchmaking and have limited access to game results
- for any other reason can not produce a leaderboard

Our _simple leaderboard service_ makes it easy to report game scores to our servers, and we host the leaderboard for you. The flow is something like this:

1. We configure a leaderboard for you.
2. You get a service account token to use for authenticating against our service.
3. You report game results from your game to the configured leaderboard using our REST-api.
4. We host and show the leaderboard on wallet.gloot.com.

We have API endpoints for doing the following:

1. Report scores to a leaderboard
2. List all active leaderboard for your game
3. Get all the scores for a leaderboard (if you wish to show it in the game rather than redirecting the users to our domain)

If this sounds applicable to your use-case, please continue reading for the full api specification.
