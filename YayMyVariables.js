alloy("configure", {
    "edgeConfigId": "a883addc-9384-449b-8ba0-bb474296e66d",
    "orgId": "53A16ACB5CC1D3760A495C99@AdobeOrg"
});

alloy("sendEvent", {
    "xdm": {
        "web": {
            "webPageDetails": {
                "URL": window.document.URL,
                "name": window.document.title
            }
        },
        "_experience": {
            "analytics": {
                "customDimensions": {
                    "eVars": {
                        "eVar1": "Russ Web SDK 2",
                        "eVar2": "Cotton plant"
                    }
                }
            }
        }
    }
});