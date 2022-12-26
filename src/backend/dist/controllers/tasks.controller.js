"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let TasksController = class TasksController {
    constructor(tasksRepository, userRepository) {
        this.tasksRepository = tasksRepository;
        this.userRepository = userRepository;
    }
    async create(tasks) {
        try {
            const task = await this.tasksRepository.create(tasks);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            task.user = task.userId ? await this.userRepository.findById(task.userId) : null;
            return task;
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при создании задачи');
        }
    }
    async count(where) {
        try {
            return await this.tasksRepository.count(where);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при получении количества задач');
        }
    }
    async find(filter) {
        try {
            return await this.tasksRepository.find(filter);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при получении задачи');
        }
    }
    async updateAll(tasks, where) {
        try {
            return await this.tasksRepository.updateAll(tasks, where);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при обновлении задач');
        }
    }
    async findById(id, filter) {
        try {
            return await this.tasksRepository.findById(id, filter);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при получении задачи');
        }
    }
    async updateById(id, tasks) {
        try {
            await this.tasksRepository.updateById(id, tasks);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при обновлении задачи');
        }
    }
    async replaceById(id, tasks) {
        try {
            await this.tasksRepository.replaceById(id, tasks);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при обновлении задачи');
        }
    }
    async deleteById(id) {
        try {
            await this.tasksRepository.deleteById(id);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при удалении задачи');
        }
    }
};
tslib_1.__decorate([
    rest_1.post('/tasks', {
        responses: {
            '200': {
                description: 'Tasks model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Tasks) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Tasks, {
                    title: 'NewTasks',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TasksController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.oas.visibility(rest_1.OperationVisibility.UNDOCUMENTED),
    rest_1.get('/tasks/count', {
        responses: {
            '200': {
                description: 'Tasks model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Tasks)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TasksController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/tasks', {
        responses: {
            '200': {
                description: 'Array of Tasks model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Tasks, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Tasks)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TasksController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.oas.visibility(rest_1.OperationVisibility.UNDOCUMENTED),
    rest_1.patch('/tasks', {
        responses: {
            '200': {
                description: 'Tasks PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Tasks, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Tasks)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Tasks, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TasksController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/tasks/{id}', {
        responses: {
            '200': {
                description: 'Tasks model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Tasks, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Tasks, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TasksController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.oas.visibility(rest_1.OperationVisibility.UNDOCUMENTED),
    rest_1.patch('/tasks/{id}', {
        responses: {
            '204': {
                description: 'Tasks PATCH success',
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
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Tasks]),
    tslib_1.__metadata("design:returntype", Promise)
], TasksController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/tasks/{id}', {
        responses: {
            '204': {
                description: 'Tasks PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')), tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Tasks]),
    tslib_1.__metadata("design:returntype", Promise)
], TasksController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/tasks/{id}', {
        responses: {
            '204': {
                description: 'Tasks DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], TasksController.prototype, "deleteById", null);
TasksController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.TasksRepository)),
    tslib_1.__param(1, repository_1.repository(repositories_1.UserRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.TasksRepository,
        repositories_1.UserRepository])
], TasksController);
exports.TasksController = TasksController;
//# sourceMappingURL=tasks.controller.js.map