const {browser} = require("protractor");
const {protractor} = require("protractor");

var BasePage = function () {

    this.locate = function (jsonObject, locator) {
        let locatorInJson = eval("jsonObject." + locator);
        let locatorDefinition = this.locatorDefinition(locatorInJson);
        if (eval("locatorInJson.type").indexOf("All") !== -1) {
            return eval("element.all(locatorDefinition)");
        }
        else {
            return eval("element(locatorDefinition)");
        }
    };

    this.locatorDefinition = function (locatorInJson) {
        let jsonType = locatorInJson.type;
        let jsonLocator = locatorInJson.locator;
        jsonType = jsonType.replace('All', '');
        switch (jsonType){
            case "id":
                return by.id(jsonLocator);
            case "css":
                return by.css(jsonLocator);
            case "xpath":
                return by.xpath(jsonLocator);
            case "tagName":
                return by.tagName(jsonLocator);
        }
    };

    /**
     * Webdriver equivalent for hitting Enter/Return key.
     */
    this.pressEnter = function () {
        return browser.actions().sendKeys(protractor.Key.ENTER).perform();
    }

    /**
     * Webdriver equivalent for entering string & hitting Enter key.
     */
    this.sendKeysAndHitEnter = function (locator, inputString) {
        var that = this;
        inputString = inputString || "";
        locator.sendKeys(inputString).then(function () {
            return that.pressEnter();
        });
    };

}

module.exports = new BasePage();