"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusesTasksController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let StatusesTasksController = class StatusesTasksController {
    constructor(statusesRepository) {
        this.statusesRepository = statusesRepository;
    }
    async find(id, filter) {
        try {
            return await this.statusesRepository.tasks(id).find(filter);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при получении задач');
        }
    }
    async create(id, tasks) {
        try {
            return await this.statusesRepository.tasks(id).create(tasks);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при создании задач');
        }
    }
    async patch(id, tasks, where) {
        try {
            return await this.statusesRepository.tasks(id).patch(tasks, where);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при обновлении задач');
        }
    }
    async delete(id, where) {
        try {
            return await this.statusesRepository.tasks(id).delete(where);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при удалении задач');
        }
    }
};
tslib_1.__decorate([
    rest_1.get('/statuses/{id}/tasks', {
        responses: {
            '200': {
                description: 'Array of Statuses has many Tasks',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Tasks) },
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
], StatusesTasksController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.post('/statuses/{id}/tasks', {
        responses: {
            '200': {
                description: 'Statuses model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Tasks) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Tasks, {
                    title: 'NewTasksInStatuses',
                    exclude: ['id'],
                    optional: ['statusId'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StatusesTasksController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.patch('/statuses/{id}/tasks', {
        responses: {
            '200': {
                description: 'Statuses.Tasks PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Tasks, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Tasks))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StatusesTasksController.prototype, "patch", null);
tslib_1.__decorate([
    rest_1.del('/statuses/{id}/tasks', {
        responses: {
            '200': {
                description: 'Statuses.Tasks DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Tasks))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StatusesTasksController.prototype, "delete", null);
StatusesTasksController = tslib_1.__decorate([
    rest_1.oas.visibility(rest_1.OperationVisibility.UNDOCUMENTED),
    tslib_1.__param(0, repository_1.repository(repositories_1.StatusesRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.StatusesRepository])
], StatusesTasksController);
exports.StatusesTasksController = StatusesTasksController;
//# sourceMappingURL=statuses-tasks.controller.js.map