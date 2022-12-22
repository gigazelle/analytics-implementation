alloy("configure", {
    "edgeConfigId": "a883addc-9384-449b-8ba0-bb474296e66d",
    "orgId": "53A16ACB5CC1D3760A495C99@AdobeOrg"
});

var dataLayer = {
    "xdm": {
        "web": {
            "webPageDetails": {
                "name": document.title
            }
        },
        "_experience": {
            "analytics": {
                "customDimensions": {
                    "eVars": {
                        "eVar1": "Web SDK",
                        "eVar2": Math.floor(Math.random() * 100) + 1,
                        "eVar3": document.URL
                    }
                }
            }
        }
    }
};

alloy("sendEvent", dataLayer);