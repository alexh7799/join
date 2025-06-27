let activePicker = false;

let newTask = {
    "cat": "",
    "user": [],
    "type": "todo",
    "descr": "",
    "date": "",
    "prio": "Medium",
    "subtasks": [],
    "title": ""
};

let usersArray = [];

let categoryValue = "";

let taskType = 'todo';


/**
 * the init function for the add task page
 */
function initAddTask() {
    checkLogin();
    includeHTML();
    checkLink();
    generateInitials();
    addTaskTemplate();
    getAssignedUsers();
}


/**
 * check login status
 * @param {*} sessionUser 
 * @returns {boolean}
 */
function checkPager(sessionUser) {
    if (!sessionUser) {
        window.location.href = "../login/login.html";
        return;
    }
}