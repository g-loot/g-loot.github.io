---
id: compliance-guide
title: Guide
sidebar_label: Guide
---

## Using our geo-compliance service

G-Loot has legal requirements on the players participating in the tournament. The two major limiting factors are age and nationality.

To help prevent players that legally cannot withdraw their winnings from entering the contest, G-Loot provides a service where the game can send the players IP-address and get back information regarding whether or not the player is in an allowed region. The game developers can then, based on this value, prevent players from entering the contest in any way they seem fit. For example by disabling the register button, or by showing an alert modal when the player tries to join the contest.

Please refer to the [API specification](./compliance-api) for the complete docmentation.

Should a user enter a tournament without being legally allowed to do so (by using a VPN or otherwise), the user will be prevented from withdrawing any winnings at our KYC-check in the withdrawal process. This results in a bad user experience and this is the reason why we encourage the game studio to prevent users from entering tournaments if they are not legally eligible to play in them.
