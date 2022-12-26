"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksCommentsController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let TasksCommentsController = class TasksCommentsController {
    constructor(tasksRepository) {
        this.tasksRepository = tasksRepository;
    }
    async find(id, filter) {
        try {
            return await this.tasksRepository.comments(id).find(filter);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при получении комментариев');
        }
    }
    async create(id, comments) {
        try {
            return await this.tasksRepository.comments(id).create(comments);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при создании комментариев');
        }
    }
    async patch(id, comments, where) {
        try {
            return await this.tasksRepository.comments(id).patch(comments, where);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при обновлении комментариев');
        }
    }
    async delete(id, where) {
        try {
            return await this.tasksRepository.comments(id).delete(where);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при удалении комментариев');
        }
    }
};
tslib_1.__decorate([
    rest_1.get('/tasks/{id}/comments', {
        responses: {
            '200': {
                description: 'Array of Tasks has many Comments',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Comments) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TasksCommentsController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.post('/tasks/{id}/comments', {
        responses: {
            '200': {
                description: 'Tasks model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Comments) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Comments, {
                    title: 'NewCommentsInTasks',
                    exclude: ['id'],
                    optional: ['taskId'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TasksCommentsController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.patch('/tasks/{id}/comments', {
        responses: {
            '200': {
                description: 'Tasks.Comments PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Comments, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Comments))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TasksCommentsController.prototype, "patch", null);
tslib_1.__decorate([
    rest_1.del('/tasks/{id}/comments', {
        responses: {
            '200': {
                description: 'Tasks.Comments DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Comments))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TasksCommentsController.prototype, "delete", null);
TasksCommentsController = tslib_1.__decorate([
    rest_1.oas.visibility(rest_1.OperationVisibility.UNDOCUMENTED),
    tslib_1.__param(0, repository_1.repository(repositories_1.TasksRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.TasksRepository])
], TasksCommentsController);
exports.TasksCommentsController = TasksCommentsController;
//# sourceMappingURL=tasks-comments.controller.js.map