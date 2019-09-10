---
id: tracking-web-application-events
title: Web Application Events
sidebar_label: Web Application Events
---

# Trackable web events

Values prefixed with a colon ":" is considered a **dynamic** value

## Screen changes

Screen changes are tracked automatically whilst navigating between screens.
These are the available screens:

| Screen                 | Category  | Action       | Name         | Value        |
| ---------------------- | --------- | ------------ | ------------ | ------------ |
| Home                   | ui_screen | screen_enter | /            | ""           |
| Auth landing           | ui_screen | screen_enter | /authlanding | ""           |
| Profile                | ui_screen | screen_enter | /profile     | ":userId"    |
| Settings               | ui_screen | screen_enter | /settings    | ""           |
| Support                | ui_screen | screen_enter | /support     | ""           |
| Wallet deposit         | ui_screen | screen_enter | /wallet      | "deposit"    |
| Wallet withdraw        | ui_screen | screen_enter | /wallet      | "withdraw"   |
| Wallet history         | ui_screen | screen_enter | /wallet      | "history"    |
| Quick matches          | ui_screen | screen_enter | /publics     | ""           |
| Quick match versus     | ui_screen | screen_enter | /public      | ":matchId"   |
| Events                 | ui_screen | screen_enter | /dailies     | ""           |
| Event versus           | ui_screen | screen_enter | /daily       | ":matchId"   |
| Match                  | ui_screen | screen_enter | /match       | ":matchId"   |
| History                | ui_screen | screen_enter | /history     | ""           |
| Leaderboard            | ui_screen | screen_enter | /leaderboard | ""           |
| Leaderboard (specific) | ui_screen | screen_enter | /leaderboard | ":leagueKey" |

## Modals

Modals (pop ups) are tracked automatically when summoned.


| Description                                                              | Category | Action      | Name                      | Value |
| ------------------------------------------------------------------------ | -------- | ----------- | ------------------------- | ----- |
| User press "How to play" on home screen                                  | ui_modal | modal_enter | get_started_modal         | ""    |
| New and/or non-logged in user automatically gets this                    | ui_modal | modal_enter | onboarding_modal          | ""    |
| User has completed onboarding (might be removed in coming versions)      | ui_modal | modal_enter | onboarding_complete_modal | ""    |
| User attempts to sign out                                                | ui_modal | modal_enter | signout_modal             | ""    |
| User press "complete your profile" button on home screen                 | ui_modal | modal_enter | complete_profile_modal    | ""    |
| User press "play" button on a match to view the matchup (versus) segment | ui_modal | modal_enter | versus_modal              | ""    |
| User press "Info (I)" button on League page                              | ui_modal | modal_enter | league_info_modal         | ""    |


## Home screen

This is the first (root) page rendered when logged in

| Description                                                                                                         | Category | Action       | Name                           | Value |
| ------------------------------------------------------------------------------------------------------------------- | -------- | ------------ | ------------------------------ | ----- |
| User press "play your first match" button whilst still in onboarding process<br>(haven't played first match yet)    | ui_event | button_press | first_match_play_button        | ""    |
| User press "complete profile" button when onboarding is complete but password isn't set<br>(this will open a modal) | ui_event | button_press | complete_profile_button        | ""    |
| User completes profile in modal triggered by the "complete profile" button                                          | ui_event | button_press | complete_profile_submit_button | ""    |

## Onboarding

Onboarding is the phase introduced to new users in the form of a modal.

| Description                                                                      | Category | Action       | Name                            | Value |
| -------------------------------------------------------------------------------- | -------- | ------------ | ------------------------------- | ----- |
| User continues from step one in onboarding modal                                 | ui_event | button_press | onboarding_continue_button      | ""    |
| User press sign in on step one in onboarding modal                               | ui_event | button_press | onboarding_login_button         | ""    |
| User press sign in on "email already exists" (hidden step 4) in onboarding modal | ui_event | button_press | onboarding_not_you_login_button | ""    |
| User continues from step two (pick a name) in onboarding modal                   | ui_event | button_press | onboarding_name_submit_button   | ""    |
| User continues from step three (write your email) in onboarding modal            | ui_event | button_press | onboarding_email_submit_button  | ""    |
| User press "not you" button on step four in onboarding modal                     | ui_event | button_press | onboarding_not_you_button       | ""    |

## Wallet

| Description                                           | Category | Action       | Name                    | Value     |
| ----------------------------------------------------- | -------- | ------------ | ----------------------- | --------- |
| User press deposit button on the deposit tab          | ui_event | button_press | wallet_deposit_button   | ":amount" |
| User press generated amount button on the deposit tab | ui_event | button_press | wallet_generated_amount | ":amount" |
| User press withdraw button on the withdrawal tab      | ui_event | button_press | wallet_withdraw_button  | ":amount" |
| User types in amount field (deposit)                  | ui_event | input_change | wallet_deposit_input    | ":amount" |
| User types in amount field (withdrawal)               | ui_event | input_change | wallet_withdraw_input   | ":amount" |

## Match

Visiting any match to view details

| Description                                                                                                                 | Category | Action       | Name                   | Value |
| --------------------------------------------------------------------------------------------------------------------------- | -------- | ------------ | ---------------------- | ----- |
| User press resume button. Resume button is visible when a user enters a match<br>and then leaves without proceeding to play | ui_event | button_press | match_resume_button    | ""    |
| User press play again button on an event. Events allows users to replay the same match<br>under certain circumstances.      | ui_event | button_press | match_replay_button    | ""    |
| User press play button on a Quick match (joining the match)                                                                 | ui_event | button_press | join_quickmatch_button | ""    |
| User press play button on an event (joining the match)                                                                      | ui_event | button_press | join_event_button      | ""    |

## Settings

| Description                                                | Category    | Action       | Name                           | Value       |
| ---------------------------------------------------------- | ----------- | ------------ | ------------------------------ | ----------- |
| User press save button on settings page (profile settings) | ui_event    | button_press | update_profile_button          | ""          |
| User types in username field (profile settings)            | ui_event    | input_change | profile_username_input         | ":username" |
| User types in email field (profile settings)               | ui_event    | input_change | profile_email_input            | ":email"    |
| User picked a profile picture and started upload           | async_event | task         | profile_picture_upload_started | ""          |

## Support
| Description                    | Category | Action       | Name              | Value |
| ------------------------------ | -------- | ------------ | ----------------- | ----- |
| User press "contact us" button | ui_event | button_press | contact_us_button | ""    |

## Payments
The payments portal is where all deposit/withdrawal logic takes place.

| Description                                                            | Category    | Action       | Name                       | Value               |
| ---------------------------------------------------------------------- | ----------- | ------------ | -------------------------- | ------------------- |
| User cancels or goes back from receipt on payments portal              | ui_event    | button_press | back_to_app                | ""                  |
| User press "cancel button" on payments portal thus returning to webapp | ui_event    | button_press | cancel_button              | ""                  |
| User press "back button" on receipt page on payments portal            | ui_event    | button_press | back_button                | ""                  |
| User is presented with a receipt from a successful deposit             | async_event | task         | deposit_receipt_success    | ":receipt (Object)" |
| User is presented with a receipt from a successful withdrawal          | async_event | task         | withdrawal_receipt_success | ":receipt (Object)" |

## Misc

| Description                                                       | Category | Action       | Name                  | Value            |
| ----------------------------------------------------------------- | -------- | ------------ | --------------------- | ---------------- |
| User opens/closes notifications                                   | ui_event | button_press | notification_icon     | true / false     |
| User press a notification item in notifications list              | ui_event | button_press | notification_item     | ":data (Object)" |
| User press "stay" or "complete profile" when logout modal is open | ui_event | button_press | sign_out_stay_button  | ""               |
| User press "leave" when logout modal is open                      | ui_event | button_press | sign_out_leave_button | ""               |


