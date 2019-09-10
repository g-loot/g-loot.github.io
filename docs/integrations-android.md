---
id: integrations-android
title: Integration for Android
sidebar_label: Android
---

# G-Loot implementation for Native
​
## Prerequisites
​
We currently support native implementation in the following languages and platforms:
​
* Swift(iOS)
* Kotlin(Android)
​
### Using the SdkManager
​
In order to start using the G-Loot SDK, we make use of a singleton.
To access the G-Loot SDK use the following pierce of code:
​
​
<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
SdkManager.Companion().instance()
```
<!--Kotlin-->
```kotlin
SdkManager.instance()
```
<!--END_DOCUSAURUS_CODE_TABS-->
​

### Configure your game
​
To make G-Loot SDK able to identify your game in our system, we make use of the configure method.
The configure method looks up if your game is available and that the user location is a accepted one.
​
For obvious reasons the ’useDevelopmentMode’ should be bound to which variant you want to build.
​
<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
SdkManager.Companion().instance()?.configure(
    sdkID: "7823102390223902",
    useDevelopmentMode: true
)
```
<!--Kotlin-->
```kotlin
SdkManager.instance()?.configure(
    sdkID =  "7823102390223902",
    useDevelopmentMode = true
)
```
<!--END_DOCUSAURUS_CODE_TABS-->


### Listen for events in the G-Loot SDK
​
<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate, BroadcastEventInterface, GameDelegate, OnboardingDelegate {
        func handleBroadcastEvent(event: String, value: String) {
        print("Event: \(event) Value: \(value)")
        switch event {
        case "playMatch":
            if let match = MatchFactory().create(json: value) {
                //Take user to the actual game, and send the match object along with it
            } else {
                print("Could not parse match from json:\n\(value)")
            }
            break
        case "ready":
            //The G-Loot SDK is now ready. Use this to hide spinners or enable buttons
            break
        case "onboarding":
            //If you have a tutorial step for your game. When the webapp sends "onboarding" it means you can start the tutorial mode
            break
        default:
            break
        }
    }
}
​
​
SdkManager.Companion().instance()?.setBroadcastEventListener(broadcastEventInterface: self)
```
<!--Kotlin-->
```kotlin
SdkManager.instance()?.setBroadcastEventListener(this)
```
<!--END_DOCUSAURUS_CODE_TABS-->
