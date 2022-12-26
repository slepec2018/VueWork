"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusesController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let StatusesController = class StatusesController {
    constructor(statusesRepository) {
        this.statusesRepository = statusesRepository;
    }
    async create(statuses) {
        try {
            return await this.statusesRepository.create(statuses);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при создании статуса');
        }
    }
    async count(where) {
        try {
            return await this.statusesRepository.count(where);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при получении количества статусов');
        }
    }
    async find(filter) {
        try {
            return await this.statusesRepository.find(filter);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при получении статуса');
        }
    }
    async updateAll(statuses, where) {
        try {
            return await this.statusesRepository.updateAll(statuses, where);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при обновлении статусов');
        }
    }
    async findById(id, filter) {
        try {
            return await this.statusesRepository.findById(id, filter);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при поиске статуса');
        }
    }
    async updateById(id, statuses) {
        try {
            await this.statusesRepository.updateById(id, statuses);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при обновлении статуса');
        }
    }
    async replaceById(id, statuses) {
        try {
            await this.statusesRepository.replaceById(id, statuses);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при обновлении статуса');
        }
    }
    async deleteById(id) {
        try {
            await this.statusesRepository.deleteById(id);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при удалении статуса');
        }
    }
};
tslib_1.__decorate([
    rest_1.oas.visibility(rest_1.OperationVisibility.UNDOCUMENTED),
    rest_1.post('/statuses', {
        responses: {
            '200': {
                description: 'Statuses model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Statuses) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Statuses, {
                    title: 'NewStatuses',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StatusesController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.oas.visibility(rest_1.OperationVisibility.UNDOCUMENTED),
    rest_1.get('/statuses/count', {
        responses: {
            '200': {
                description: 'Statuses model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Statuses)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StatusesController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/statuses', {
        responses: {
            '200': {
                description: 'Array of Statuses model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Statuses, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Statuses)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StatusesController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.oas.visibility(rest_1.OperationVisibility.UNDOCUMENTED),
    rest_1.patch('/statuses', {
        responses: {
            '200': {
                description: 'Statuses PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Statuses, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Statuses)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Statuses, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StatusesController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.oas.visibility(rest_1.OperationVisibility.UNDOCUMENTED),
    rest_1.get('/statuses/{id}', {
        responses: {
            '200': {
                description: 'Statuses model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Statuses, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Statuses, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StatusesController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.oas.visibility(rest_1.OperationVisibility.UNDOCUMENTED),
    rest_1.patch('/statuses/{id}', {
        responses: {
            '204': {
                description: 'Statuses PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Statuses, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Statuses]),
    tslib_1.__metadata("design:returntype", Promise)
], StatusesController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.oas.visibility(rest_1.OperationVisibility.UNDOCUMENTED),
    rest_1.put('/statuses/{id}', {
        responses: {
            '204': {
                description: 'Statuses PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')), tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Statuses]),
    tslib_1.__metadata("design:returntype", Promise)
], StatusesController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.oas.visibility(rest_1.OperationVisibility.UNDOCUMENTED),
    rest_1.del('/statuses/{id}', {
        responses: {
            '204': {
                description: 'Statuses DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], StatusesController.prototype, "deleteById", null);
StatusesController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.StatusesRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.StatusesRepository])
], StatusesController);
exports.StatusesController = StatusesController;
//# sourceMappingURL=statuses.controller.js.map