---
id: hosting-tournament
title: Hosting the tournament
sidebar_label: Hosting the tournament
---

Once the vouchers have been delivered, the tournament may begin.
The ways that a tournament could be implemented are manifold. As long as the competition produces a result list sorted on a metric that is determined by skill (i.e. a leaderboard), the game studio has creative freedom within these restrictions. For example, it may be the 100 fastest players to solve a certain solitaire deck or the winners of a more conventional bracket tournament in a chess game.

In the graphical interface of the game, it must be clear that G-Loot legally hosts the competition. The user is required to read and accept the G-Loot terms & conditions before entering the game.

![image hosting](assets/voucher/hosting.png)

## Using our geo-compliance service

G-Loot has legal requirements on the players participating in the tournament. The two major limiting factors are age and nationality.

To help prevent players that legally cannot withdraw their winnings from entering the contest, G-Loot provides a REST endpoint where the game can send the players IP-address and get back information regarding whether or not the player is in an allowed region. The game developers can then, based on this value, prevent players from entering the contest in any way they seem fit. For example by disabling the register button, or by showing an alert modal when the player tries to join the contest.

The url to the endpoint is: `https://compliance-gloot.appspot.com/api/v1/ip/{the-ip-you-want-to-check}`

A `GET` call to this endpoint will yield a response in this format:

```
{
  "alpha2":"FR",
  "country":"France",
  "region":"Nouvelle-Aquitaine",
  "city":"Bordeaux",
  "blocked":true
}
```

Where the boolean `blocked`-property determines if that IP is allowed to compoete on our platform.

<!--DOCUSAURUS_CODE_TABS-->
<!--Javascript-->

```nodeJs
async function getGeoData(ip) {
  const url = `https://compliance-gloot.appspot.com/api/v1/ip/${ip}`;
  const response = await fetch(url);
  return await response.json();
}

async function isPlayerAllowed(ip) {
  try {
    const data = await getGeoData(ip);
    return !data.blocked;
  } catch (e) {
    return false;
  }
}

isPlayerAllowed('13.49.132.198').then(console.log);
```

<!--Java-->

```java
  @Data
  public static class IpGeoData {
    private String alpha2;
    private String country;
    private String region;
    private String city;
    private boolean blocked = true;
  }
  public IpGeoData getGeoData(String ip) throws IOException {
    URL url = new URL("https://compliance-gloot.appspot.com/api/v1/ip/" + ip);
    return new ObjectMapper().readValue(url.openStream(), IpGeoData.class);
  }
  public boolean isPlayerAllowed(String ip) {
    try {
      return !getGeoData(ip).blocked;
    } catch (IOException e) {
      return false;
    }
  }
  @Test
  public void testIfPlayerIsAllowed() throws Exception {
    assertFalse(isPlayerAllowed("127.0.0.1"));
  }
```

<!--Go-->

```go
 import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"net/url"
)
// use "golang.org/x/oauth2" to create a proper OAuth2 client
var complianceClient *http.Client
func isIPBlocked(ip string) (blocked bool) {
	blocked = true
	var res *http.Response
	url := fmt.Sprintf("https://compliance-gloot.appspot.com/api/v1/ip/%s", url.PathEscape(ip))
	if req, err := http.NewRequest(http.MethodGet, url, nil); err != nil {
		log.Println(err)
		return
	} else {
		if res, err = complianceClient.Do(req); err != nil {
			log.Println(err)
			return
		}
	}
	defer res.Body.Close()
	j := struct {
		Blocked bool `json:"blocked"`
	}{}
	if err := json.NewDecoder(res.Body).Decode(&j); err != nil {
		log.Println(err)
	} else {
		blocked = j.Blocked
	}
	return
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

Should a user enter a tournament without being legally allowed to do so (by using a VPN or otherwise), the user will be prevented from withdrawing any winnings at our KYC-check in the withdrawal process. This results in a bad user experience and this is the reason why we encourage the game studio to prevent users from entering tournaments if they are not legally eligible to play in them.
