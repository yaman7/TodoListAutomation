let e2eDir = __dirname;

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['suites/todoTests.js'],
    capabilities:{
        'browserName': 'chrome',
        'goog:chromeOptions': {
            w3c: false
        }
    },
    onPrepare: function () {
        global.requirePageObject = function (relativePath) {
            return require(e2eDir + '/pages/' + relativePath + '.js');
        };

        global.requireLocator = function (relativePath) {
            return require(e2eDir + '/locators/' + relativePath + '.json');
        };

        global.requireTestData = function (relativePath) {
            return require(e2eDir + '/testData/' + relativePath + '.json');
        };
    }
};

