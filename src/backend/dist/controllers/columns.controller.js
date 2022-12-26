"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnsController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ColumnsController = class ColumnsController {
    constructor(columnsRepository) {
        this.columnsRepository = columnsRepository;
    }
    async create(columns) {
        try {
            return await this.columnsRepository.create(columns);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при создании колонки');
        }
    }
    async count(where) {
        try {
            return await this.columnsRepository.count(where);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при получении количества столбцов');
        }
    }
    async find(filter) {
        try {
            return await this.columnsRepository.find(filter);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при получении столбцов');
        }
    }
    async updateAll(columns, where) {
        try {
            return await this.columnsRepository.updateAll(columns, where);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при обновлении столбцов');
        }
    }
    async findById(id, filter) {
        try {
            return await this.columnsRepository.findById(id, filter);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при получении столбца');
        }
    }
    async updateById(id, columns) {
        try {
            await this.columnsRepository.updateById(id, columns);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при обновлении столбца');
        }
    }
    async replaceById(id, columns) {
        try {
            await this.columnsRepository.replaceById(id, columns);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при обновлении столбца');
        }
    }
    async deleteById(id) {
        try {
            await this.columnsRepository.deleteById(id);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при обновлении столбца');
        }
    }
};
tslib_1.__decorate([
    rest_1.post('/columns', {
        responses: {
            '200': {
                description: 'Columns model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Columns) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Columns, {
                    title: 'NewColumns',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ColumnsController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.oas.visibility(rest_1.OperationVisibility.UNDOCUMENTED),
    rest_1.get('/columns/count', {
        responses: {
            '200': {
                description: 'Columns model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Columns)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ColumnsController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/columns', {
        responses: {
            '200': {
                description: 'Array of Columns model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Columns, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Columns)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ColumnsController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.oas.visibility(rest_1.OperationVisibility.UNDOCUMENTED),
    rest_1.patch('/columns', {
        responses: {
            '200': {
                description: 'Columns PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Columns, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Columns)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Columns, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ColumnsController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/columns/{id}', {
        responses: {
            '200': {
                description: 'Columns model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Columns, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Columns, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ColumnsController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.oas.visibility(rest_1.OperationVisibility.UNDOCUMENTED),
    rest_1.patch('/columns/{id}', {
        responses: {
            '204': {
                description: 'Columns PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Columns, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Columns]),
    tslib_1.__metadata("design:returntype", Promise)
], ColumnsController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/columns/{id}', {
        responses: {
            '204': {
                description: 'Columns PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')), tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Columns]),
    tslib_1.__metadata("design:returntype", Promise)
], ColumnsController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/columns/{id}', {
        responses: {
            '204': {
                description: 'Columns DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], ColumnsController.prototype, "deleteById", null);
ColumnsController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.ColumnsRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ColumnsRepository])
], ColumnsController);
exports.ColumnsController = ColumnsController;
//# sourceMappingURL=columns.controller.js.map