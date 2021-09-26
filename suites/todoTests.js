const {browser} = require("protractor");
let ToDoPage = requirePageObject("todoPageObject");
let ToDoTestData = requireTestData("todoTestData");

describe('Test todo page', function() {

    let todoPage = new ToDoPage();

    let initialCount;
    let expectedCount;

    it('should open todo page', function() {
        browser.waitForAngularEnabled(false);
        browser.get('https://simplest-react-todo-app.herokuapp.com/');
    });

    it('Get todo count before adding a TODO', async function() {
        let count = await todoPage.getToDoCount();
        initialCount = parseInt(count.split(" ")[0]);
    });

    it('should be able to add TODO in the list', async function() {
        await todoPage.addToDo(ToDoTestData.todo);
    });

    it('Get todo count after adding a TODO', async function() {
        let count = await todoPage.getToDoCount();
        expectedCount = parseInt(count.split(" ")[0]);
        expect(expectedCount).toBe(initialCount+1);
    });

    it('Added TODO should be seen in pending list', async function() {
        let count = await todoPage.getToDoFromList(ToDoTestData.todo).count();
        expect(count).toBe(1);
    });

    it('should be able to search in todo list', async function() {
        await todoPage.clickOnSearchIcon();
        await todoPage.clickOnSearchField();
        await todoPage.enterTextInSearchField(ToDoTestData.todo);
        let count = await todoPage.getToDoFromList(ToDoTestData.todo).count();
        expect(count).toBe(1);
    });

    it('should be able to mark a todo as completed', async function() {
        await todoPage.clickOnToDoFromList(ToDoTestData.todo);
    });

    it('should be able to clear search in todo list', async function() {
        await todoPage.clickOnSearchField();
        await todoPage.clearTextInSearchField();
    });

    it('Completed todo should be seen in Completed Tab', async function() {
        await todoPage.clickOnCompletedTab();
        let count = await todoPage.getToDoFromList(ToDoTestData.todo).count();
        expect(count).toBe(1);
    });
});