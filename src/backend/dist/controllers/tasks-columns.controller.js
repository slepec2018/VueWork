"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksColumnsController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let TasksColumnsController = class TasksColumnsController {
    constructor(tasksRepository) {
        this.tasksRepository = tasksRepository;
    }
    async getColumns(id) {
        try {
            return await this.tasksRepository.column(id);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при получении колонок');
        }
    }
};
tslib_1.__decorate([
    rest_1.get('/tasks/{id}/columns', {
        responses: {
            '200': {
                description: 'Columns belonging to Tasks',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Columns) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TasksColumnsController.prototype, "getColumns", null);
TasksColumnsController = tslib_1.__decorate([
    rest_1.oas.visibility(rest_1.OperationVisibility.UNDOCUMENTED),
    tslib_1.__param(0, repository_1.repository(repositories_1.TasksRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.TasksRepository])
], TasksColumnsController);
exports.TasksColumnsController = TasksColumnsController;
//# sourceMappingURL=tasks-columns.controller.js.map