"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const dummy_users_json_1 = tslib_1.__importDefault(require("./dummy-users.json"));
const dummy_columns_json_1 = tslib_1.__importDefault(require("./dummy-columns.json"));
const dummy_task_json_1 = tslib_1.__importDefault(require("./dummy-task.json"));
const repositories_1 = require("../repositories");
const bcryptjs_1 = require("bcryptjs");
const lodash_1 = tslib_1.__importDefault(require("lodash"));
const populateUsers = async (user, userRepository) => {
    const password = await bcryptjs_1.hash(user.password, await bcryptjs_1.genSalt());
    const newUser = await userRepository.create(lodash_1.default.omit(user, 'password'));
    return userRepository.customUserCredentials(newUser.id).create({ password });
};
const populateColumns = async (column, columnsRepository) => {
    return columnsRepository.create(column);
};
const populateTasks = async (task, tasksRepository) => {
    return tasksRepository.create(task);
};
async function load(app) {
    const usersPromises = dummy_users_json_1.default.map(async (user) => populateUsers(user, await app.getRepository(repositories_1.UserRepository)));
    const resultUsers = await Promise.all(usersPromises);
    const usersIdList = resultUsers.map(({ userId }) => userId);
    for (const column of dummy_columns_json_1.default) {
        await populateColumns(column, await app.getRepository(repositories_1.ColumnsRepository));
    }
    const possibleTags = ['Срочно', 'Дизайн', 'Для верстки', 'Фронтенд', 'Бекэнд', 'Не горит'];
    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    const tasksTotal = 20;
    const tasksListToSave = [...Array(tasksTotal).keys()].map(i => {
        const numberOfTags = getRandomNumber(0, 5);
        const tags = new Array(numberOfTags).fill(null)
            .map(() => possibleTags[getRandomNumber(0, 5)]).join('#');
        const taskToSave = JSON.parse(JSON.stringify(dummy_task_json_1.default));
        taskToSave.title = `${taskToSave.title} ${i + 1}`;
        taskToSave.description = `${taskToSave.description} ${i + 1}`;
        taskToSave.columnId = i % 4 ? i % 4 : null;
        taskToSave.statusId = i % 3 ? i % 3 : null;
        taskToSave.userId = i % 8 ? usersIdList[i % 8] : null;
        taskToSave.dueDate = i > 16 ? new Date().toString() : null;
        taskToSave.tags = tags;
        return taskToSave;
    });
    const taskByColumns = {};
    tasksListToSave.forEach(task => {
        const { columnId } = task;
        if (taskByColumns[columnId]) {
            task.sortOrder = taskByColumns[columnId].length;
            taskByColumns[columnId].push(task);
        }
        else {
            task.sortOrder = 0;
            taskByColumns[columnId] = [task];
        }
    });
    for (const task of tasksListToSave) {
        await populateTasks(task, await app.getRepository(repositories_1.TasksRepository));
    }
    console.log('Dummy data is populated');
}
exports.default = load;
//# sourceMappingURL=index.js.map