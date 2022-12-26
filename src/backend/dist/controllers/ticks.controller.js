"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicksController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let TicksController = class TicksController {
    constructor(ticksRepository) {
        this.ticksRepository = ticksRepository;
    }
    async create(ticks) {
        try {
            return await this.ticksRepository.create(ticks);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при создании тикса');
        }
    }
    async count(where) {
        try {
            return await this.ticksRepository.count(where);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при получении количества тиксов');
        }
    }
    async find(filter) {
        try {
            return await this.ticksRepository.find(filter);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при получении тикса');
        }
    }
    async updateAll(ticks, where) {
        try {
            return await this.ticksRepository.updateAll(ticks, where);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при обновлении тиксов');
        }
    }
    async findById(id, filter) {
        try {
            return await this.ticksRepository.findById(id, filter);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при получении тикса');
        }
    }
    async updateById(id, ticks) {
        try {
            await this.ticksRepository.updateById(id, ticks);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при обновлении тикса');
        }
    }
    async replaceById(id, ticks) {
        try {
            await this.ticksRepository.replaceById(id, ticks);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при обновлении тикса');
        }
    }
    async deleteById(id) {
        try {
            await this.ticksRepository.deleteById(id);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при удалении тикса');
        }
    }
};
tslib_1.__decorate([
    rest_1.post('/ticks', {
        responses: {
            '200': {
                description: 'Ticks model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Ticks) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Ticks, {
                    title: 'NewTicks',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TicksController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.oas.visibility(rest_1.OperationVisibility.UNDOCUMENTED),
    rest_1.get('/ticks/count', {
        responses: {
            '200': {
                description: 'Ticks model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Ticks)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TicksController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/ticks', {
        responses: {
            '200': {
                description: 'Array of Ticks model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Ticks, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Ticks)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TicksController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.oas.visibility(rest_1.OperationVisibility.UNDOCUMENTED),
    rest_1.patch('/ticks', {
        responses: {
            '200': {
                description: 'Ticks PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Ticks, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Ticks)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Ticks, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TicksController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/ticks/{id}', {
        responses: {
            '200': {
                description: 'Ticks model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Ticks, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Ticks, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TicksController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.oas.visibility(rest_1.OperationVisibility.UNDOCUMENTED),
    rest_1.patch('/ticks/{id}', {
        responses: {
            '204': {
                description: 'Ticks PATCH success',
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
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Ticks]),
    tslib_1.__metadata("design:returntype", Promise)
], TicksController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/ticks/{id}', {
        responses: {
            '204': {
                description: 'Ticks PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')), tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Ticks]),
    tslib_1.__metadata("design:returntype", Promise)
], TicksController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/ticks/{id}', {
        responses: {
            '204': {
                description: 'Ticks DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], TicksController.prototype, "deleteById", null);
TicksController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.TicksRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.TicksRepository])
], TicksController);
exports.TicksController = TicksController;
//# sourceMappingURL=ticks.controller.js.map