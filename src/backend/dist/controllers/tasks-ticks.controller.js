"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksTicksController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let TasksTicksController = class TasksTicksController {
    constructor(tasksRepository) {
        this.tasksRepository = tasksRepository;
    }
    async find(id, filter) {
        try {
            return await this.tasksRepository.ticks(id).find(filter);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при получении тиксов');
        }
    }
    async create(id, ticks) {
        try {
            return await this.tasksRepository.ticks(id).create(ticks);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при создании тиксов');
        }
    }
    async patch(id, ticks, where) {
        try {
            return await this.tasksRepository.ticks(id).patch(ticks, where);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при обновлении тиксов');
        }
    }
    async delete(id, where) {
        try {
            return await this.tasksRepository.ticks(id).delete(where);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при удалении тиксов');
        }
    }
};
tslib_1.__decorate([
    rest_1.get('/tasks/{id}/ticks', {
        responses: {
            '200': {
                description: 'Array of Tasks has many Ticks',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Ticks) },
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
], TasksTicksController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.post('/tasks/{id}/ticks', {
        responses: {
            '200': {
                description: 'Tasks model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Ticks) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Ticks, {
                    title: 'NewTicksInTasks',
                    exclude: ['id'],
                    optional: ['taskId'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TasksTicksController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.patch('/tasks/{id}/ticks', {
        responses: {
            '200': {
                description: 'Tasks.Ticks PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Ticks, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Ticks))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TasksTicksController.prototype, "patch", null);
tslib_1.__decorate([
    rest_1.del('/tasks/{id}/ticks', {
        responses: {
            '200': {
                description: 'Tasks.Ticks DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Ticks))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TasksTicksController.prototype, "delete", null);
TasksTicksController = tslib_1.__decorate([
    rest_1.oas.visibility(rest_1.OperationVisibility.UNDOCUMENTED),
    tslib_1.__param(0, repository_1.repository(repositories_1.TasksRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.TasksRepository])
], TasksTicksController);
exports.TasksTicksController = TasksTicksController;
//# sourceMappingURL=tasks-ticks.controller.js.map