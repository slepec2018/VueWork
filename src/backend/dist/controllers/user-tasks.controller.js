"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTasksController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let UserTasksController = class UserTasksController {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async find(id, filter) {
        try {
            return await this.userRepository.tasks(id).find(filter);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при получении задач');
        }
    }
    async create(id, tasks) {
        try {
            return await this.userRepository.tasks(id).create(tasks);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при создании задач');
        }
    }
    async patch(id, tasks, where) {
        try {
            return await this.userRepository.tasks(id).patch(tasks, where);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при обновлении задач');
        }
    }
    async delete(id, where) {
        try {
            return await this.userRepository.tasks(id).delete(where);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при удалении задач');
        }
    }
};
tslib_1.__decorate([
    rest_1.get('/users/{id}/tasks', {
        responses: {
            '200': {
                description: 'Array of User has many Tasks',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Tasks) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserTasksController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.post('/users/{id}/tasks', {
        responses: {
            '200': {
                description: 'User model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Tasks) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Tasks, {
                    title: 'NewTasksInUser',
                    exclude: ['id'],
                    optional: ['userId'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserTasksController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.patch('/users/{id}/tasks', {
        responses: {
            '200': {
                description: 'User.Tasks PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Tasks, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Tasks))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserTasksController.prototype, "patch", null);
tslib_1.__decorate([
    rest_1.del('/users/{id}/tasks', {
        responses: {
            '200': {
                description: 'User.Tasks DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Tasks))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserTasksController.prototype, "delete", null);
UserTasksController = tslib_1.__decorate([
    rest_1.oas.visibility(rest_1.OperationVisibility.UNDOCUMENTED),
    tslib_1.__param(0, repository_1.repository(repositories_1.UserRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UserRepository])
], UserTasksController);
exports.UserTasksController = UserTasksController;
//# sourceMappingURL=user-tasks.controller.js.map