"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnsTasksController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ColumnsTasksController = class ColumnsTasksController {
    constructor(columnsRepository) {
        this.columnsRepository = columnsRepository;
    }
    async find(id, filter) {
        try {
            return await this.columnsRepository.tasks(id).find(filter);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при получении задач');
        }
    }
    async create(id, tasks) {
        try {
            return await this.columnsRepository.tasks(id).create(tasks);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при создании задачи');
        }
    }
    async patch(id, tasks, where) {
        try {
            return await this.columnsRepository.tasks(id).patch(tasks, where);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при обновлении задачи');
        }
    }
    async delete(id, where) {
        try {
            return await this.columnsRepository.tasks(id).delete(where);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при удалении задачи');
        }
    }
};
tslib_1.__decorate([
    rest_1.get('/columns/{id}/tasks', {
        responses: {
            '200': {
                description: 'Array of Columns has many Tasks',
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
], ColumnsTasksController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.post('/columns/{id}/tasks', {
        responses: {
            '200': {
                description: 'Columns model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Tasks) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Tasks, {
                    title: 'NewTasksInColumns',
                    exclude: ['id'],
                    optional: ['columnId'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ColumnsTasksController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.patch('/columns/{id}/tasks', {
        responses: {
            '200': {
                description: 'Columns.Tasks PATCH success count',
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
], ColumnsTasksController.prototype, "patch", null);
tslib_1.__decorate([
    rest_1.del('/columns/{id}/tasks', {
        responses: {
            '200': {
                description: 'Columns.Tasks DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Tasks))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ColumnsTasksController.prototype, "delete", null);
ColumnsTasksController = tslib_1.__decorate([
    rest_1.oas.visibility(rest_1.OperationVisibility.UNDOCUMENTED),
    tslib_1.__param(0, repository_1.repository(repositories_1.ColumnsRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ColumnsRepository])
], ColumnsTasksController);
exports.ColumnsTasksController = ColumnsTasksController;
//# sourceMappingURL=columns-tasks.controller.js.map