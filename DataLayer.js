let params = new URLSearchParams(document.location.search);
let dQuery = params.get("d");

let dataLayer = {
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
                        "eVar3": document.URL,
                        "eVar4": dQuery
                    }
                }
            }
        }
    }
};
