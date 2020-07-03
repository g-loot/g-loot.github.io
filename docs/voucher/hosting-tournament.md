---
id: hosting-tournament
title: Hosting the tournament
sidebar_label: Hosting the tournament
---

Once the vouchers has been delievered, the tournament may begin.

The ways that a tournament could be implemented are manifold. As stated previously, as long as the competition produces a result list sorted on a metric that is determined by skill (i.e. a leaderboard), the game studio has creative freedom within these restrictions.

For example, it may be the 100 fastest players to solve a certain solitaire deck, or the winners of a more conventional bracket tournament in a card game.

In the graphical interface of the game, it must be clear that the competition is legally hosted by G-Loot. The user has to read and accept the G-Loot terms & conditions before entering the game.

![image hosting](assets/voucher/hosting.png)

## Using our geo-compliance service

G-Loot has legal requirements on the players participating in the tournament. The two major limiting factors are age and nationality.

To help prevent players that legally cannot withdraw their winnings from entering the contest, G-Loot provides a REST endpoint where the game can send the players IP-address and get back information regarding whether or not the player is in an allowed region. The game developers can then, based on this value, prevent players from entering the contest in any way they seem fit. For example by disabling the register button, or by showing an alert modal when the player tries to join the contest.

<!--DOCUSAURUS_CODE_TABS-->
<!--Javascript-->

```nodeJs
// coming soon
```

<!--Kotlin-->

```kotlin
// coming soon
```

<!--END_DOCUSAURUS_CODE_TABS-->
