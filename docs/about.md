---
id: about
title: About
sidebar_label: About
---

## Introduction

The G-Loot mobile SDK provides a way for developers and game companies to make their games competitives.
Currently, only asynchronous games are supported. If you have a realtime game, we currently can not
report scores in that fashion.

## How does it work?

The G-Loot match system needs to use our asynchronous match object (todo: add a ref) in order to work. The match object is decoupled, there is no waiting until a lobby is filled up, a player plays whenever, and later, when another player joins the created match and reports whatever score that player got at that point in time. Our system will deduce if enough players joined in a given time frame to end the match end finalize the scores and the stakes.

## Supported platforms

| Platform       | Architecture |
| -------------- | ------------ |
| iOS native     | X64_32       |
| Android native | X64_32       |
| Unity          | X64_32       |

## Implementation

G-Loot provides a system library containing everything that is needed to report a score for several architectures and platforms. A few examples of how to integrate can be found below and in our integration section.

[Implement with Native (Swift, Kotlin)](integrations-native.md)

[Implement with Unity](integrations-unity.md)
