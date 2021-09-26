let BasePage = requirePageObject("basePageObject");
let jsonLocator = requireLocator("todoLocators");

let ToDoPage = function () {

    this.addToDoInput = this.locate(jsonLocator, "addToDoInput");
    this.allToDo = this.locate(jsonLocator, "allToDo");
    this.toDoCount = this.locate(jsonLocator, "toDoCount");
    this.searchIcon = this.locate(jsonLocator, "searchIcon");
    this.textInSearchIcon = this.locate(jsonLocator, "textInSearchIcon");
    this.completedTab = this.locate(jsonLocator, "completedTab");

    this.addToDo = function (todo) {
        console.log("Enter TODO");
        return this.sendKeysAndHitEnter(this.addToDoInput, todo);
    };

    this.clickOnSearchIcon = function () {
        console.log("Click on search icon");
        return this.searchIcon.click();
    };

    this.clickOnCompletedTab = function () {
        console.log("Click on Completed tab");
        return this.completedTab.click();
    };

    this.enterTextInSearchField = function (text) {
        console.log("Enter text in Search field");
        return this.textInSearchIcon.sendKeys(text);
    };

    this.clickOnSearchField = function () {
        console.log("Click on search field");
        return this.textInSearchIcon.click();
    };

    this.clearTextInSearchField = function () {
        console.log("Clear text from search field");
        return this.textInSearchIcon.clear();
    };

    this.getToDoCount = function () {
        console.log("Getting count of TODOs in list");
        return this.toDoCount.get(1).getText();
    };

    this.getToDoFromList = function (todo) {
        let foundElements =  this.allToDo.filter(function (todoList) {
            return todoList.getText().then(function (todoName) {
                return todoName.includes(todo);
            });
        });
        return foundElements;
    };

    this.clickOnToDoFromList = function (todo) {
        let foundElements = this.getToDoFromList(todo);
        console.log("Clicking on todo");
        return foundElements.get(0).click();
    };
};

ToDoPage.prototype = BasePage;
module.exports = ToDoPage;