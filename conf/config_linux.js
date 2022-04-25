
GRID_USER_NAME = process.env.GRID_USER_NAME;
GRID_ACCESS_KEY = process.env.GRID_ACCESS_KEY;
HUB_URL = process.env.HUB_URL;
VIDEO_URL = process.env.VIDEO_URL;

var config = {
        env:{
            platformName: "linux",
            browserName: "chrome",
            browserVersion: "latest"
        },
        preset: {
            count:1,
            acceptableNodeCount: 1,
            timeout: 300000
        },
        testCases: [
            {
                name: "Test chrome on linux with screenshot",
                recordVideo: false,
            },
            {
                name: "Test chrome on linux with video",
                recordVideo: true
            },
        ]
    }
;

exports.testCases = config.testCases;
exports.presetConfig = config.preset;
exports.env=config.env;