---
id: sls-intro
title: Simple leaderboard service
sidebar_label: Introduction
---

# Simple leaderboard service

This section is relevant to you if your game:

- does not have a backend
- is a single player game
- use a third party service for matchmaking and have limited access to game results
- for any other reason can not produce a leaderboard

Our _simple leaderboard service_ makes it easy to report game scores to our servers, and we host the leaderboard for you. The flow is something like this:

1. We configure a challenge for you.
2. You report game results from your game to the configured challenge using our REST-api.
3. We host and show the leaderboard on wallet.gloot.com.

We have API endpoints for doing the following:

1. report scores to a challenge
2. list all active challenges for your game
3. get all the scores for a challenge (if you wish to show it in the game rather than redirecting the users to our domain)

And more to come!

If this sounds interesting, please continue reading for the full api specification.
