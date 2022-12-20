alloy("configure", {
    "edgeConfigId": "0dada9f4-fa94-4c9c-8aaf-fdbac6c56282"
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
                        "eVar1": "Web SDK example value",
                        "eVar2": "Example value from Web SDK in eVar2"
                    }
                }
            }
        }
    }
});



// Install Web SDK
// Create schema
// Create datastream
// Add analytics service
// Configure web sdk
// Send web sdk event