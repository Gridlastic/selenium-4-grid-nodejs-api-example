const
    webdriver = require("selenium-webdriver"),
    chrome = require("selenium-webdriver/chrome");
const {ApiClient, NodeApi} = require("../nodeapi");
const {testCases, presetConfig, env} = require("../" + process.argv[3]);

var buildDriver = function (caps) {
    return new webdriver.Builder()
        .usingServer(
            "https://" + GRID_USER_NAME + ":" + GRID_ACCESS_KEY + "@" + HUB_URL + "/wd/hub"
        )
        .withCapabilities(caps)
        .build();
};

function getNodeAPI() {
    const apiClient = new ApiClient("https://" + HUB_URL + "/api/v1")
    const BasicAuth = apiClient.authentications['BasicAuth'];
    BasicAuth.username = GRID_USER_NAME;
    BasicAuth.password = GRID_ACCESS_KEY;
    return new NodeApi(apiClient);
}

async function preset(api, opts) {
    try {
        return await api.preset(opts);
    } catch (error) {
        throw new Error(`exception when calling api: ${error}.`);
    }
}

async function count(api, opts) {
    try {
        return await api.count(opts);
    } catch (error) {
        throw new Error(`exception when calling api: ${error}.`);
    }
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitForNodesAsync(api) {
    var totalSleep = 0;
    var res = 0;
    var countRequest = {
        'browserName': env.browserName,
        'browserVersion': env.browserVersion,
        'platformName': env.platformName
    };
    var presetRequest =
        {
            nodes: [{
                browserName: env.browserName,
                browserVersion: env.browserVersion,
                platformName: env.platformName,
                count: presetConfig.count
            }]
        };
    while (totalSleep < presetConfig.timeout) {
        await count(api, countRequest).then(resp => res = resp.free);
        if (res < presetConfig.acceptableNodeCount) {
            await preset(api, presetRequest);
            await sleep(30000);
        } else {
            break;
        }
        totalSleep += 30000;
    }
}

testCases.forEach(async function (testCase) {
    describe("Gridlastic node api test ", function () {
        var driver, options;
        this.timeout(600000);
        before(async function () {
            const nodeAPI = getNodeAPI();
            console.log("Preparing environment with options " + env.browserName + " " + env.browserVersion + " " + env.platformName + " " + presetConfig.count);
            await waitForNodesAsync(nodeAPI).then(res => console.log("Environment is ready"))
        });


        beforeEach(function (done) {
            console.log("Before Each " + this.currentTest.title + " running...");
            options = new chrome.Options();
            options.setBrowserVersion(env.browserVersion);
            options.setPlatform(env.platformName);

            console.log("Before each " + this.currentTest.title + " finished...");
            done();
        });


        it(testCase.name, function (done) {
            //video recording
            if (testCase.recordVideo === true) {
                options.set("gridlastic:options", {"video": "true"});
            }
            driver = buildDriver(options);
            driver.manage().window().maximize();

            console.log(testCase.name + " is starting...");
            driver.get("data:text/html,<h1>GRIDLASTIC SELENIUM GRID DEMO</h1>");
            driver.get("https://www.gridlastic.com/?demo").then(function () {
                driver.getTitle().then(function (title) {
                    setTimeout(function () {
                        console.log(title);
                        console.log(testCase.name + " finished...");
                        done();
                    }, 10000);
                });
            });
        });


        afterEach(function (done) {
            console.log("After each for test <" + this.currentTest.title + "> running");
            driver.getSession()
                .then(function (session) {
                    var session_id = session.getId();
                    if (testCase.recordVideo === true) {
                        console.log("video_url:" + VIDEO_URL + "/play.html?" + session_id);
                    }
                });
            driver.quit().then(function () {
                done();
            });
            console.log("After each for test <" + this.currentTest.title + "> finished");
        });

    })
});

