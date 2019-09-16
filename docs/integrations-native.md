---
id: integrations-native
title: Integration for Native
sidebar_label: Native
---
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

<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate, BroadcastEventInterface {
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        SdkManager.Companion().instance()?.setBroadcastEventListener(broadcastEventInterface: self)
​
        return true
    }
​
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
        case "sdkReady":
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
```
<!--Kotlin-->
```kotlin
class DevApplication : Application(), BroadcastEventInterface {
​
    override fun onCreate() {
        super.onCreate()
        SdkManager.instance()?.setBroadcastEventListener(this)
    }
​
    override fun handleBroadcastEvent(event: String, value: String) {
        println("Event: $event with value: $value")
        when (event) {
            "playMatch" -> {
                val match = MatchFactory().create(json = value)
                match?.let {
                    //Take user to the actual game, and send the match object along with it
                }?:run{
                    println("Could not parse match from json:\n{$value}")
                }
            }
            "sdkready" -> {
                //The G-Loot SDK is now ready. Use this to hide spinners or enable buttons
            }
            "onboarding" -> {
                //If you have a tutorial step for your game. When the webapp sends "onboarding" it means you can start the tutorial mode
            }
        }
    }
}
```
<!--END_DOCUSAURUS_CODE_TABS-->
​

### Report a score

When your player has completed the game session and the score of the player is to be reported,
the following command is used to send the score bound to the most recent match that was started.
​
<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
 SdkManager.Companion().instance()?.reportScore(
    score: "1000",
    description: "1000 pts",
    autoLossReason: "",
    isFinishedResult: true
)
```
<!--Kotlin-->
```kotlin
 SdkManager.instance()?.reportScore(
    score = "1000",
    description = "1000 pts",
    autoLossReason = "",
    isFinishedResult = true
)
```
<!--END_DOCUSAURUS_CODE_TABS-->
​

### Show the G-Loot webapp

When you are done with the current match inside your game, it is probably a good idea to
take the user back to the G-Loot webapp flow. 

The `takeUserToUrlRoot` parameter, if true, takes the user back to the G-Loot webapp root.
If not, the latest page visited will become visible again.

<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
SdkManager.Companion().instance()?.showWebApp(takeUserToUrlRoot: false)
```
<!--Kotlin-->
```kotlin
SdkManager.instance()?.showWebApp(false)
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Send an achievement
​
The G-Loot SDK supports unlocking and displaying achievements. Currently `onboarding` is available
as a default way to reward the player when they have completed a onboarding process in a game.
​
<!--DOCUSAURUS_CODE_TABS-->
<!--Swift-->
```swift
SdkManager.Companion().instance()?.sendAchievement(achievementId: "onboarding")
```
<!--Kotlin-->
```kotlin
SdkManager.instance()?.sendAchievement(achievementId = "onboarding")
```
<!--END_DOCUSAURUS_CODE_TABS-->
