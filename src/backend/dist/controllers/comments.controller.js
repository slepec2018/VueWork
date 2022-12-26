"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CommentsController = class CommentsController {
    constructor(commentsRepository) {
        this.commentsRepository = commentsRepository;
    }
    async create(comments) {
        try {
            return await this.commentsRepository.create(comments);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при создании комментария');
        }
    }
    async count(where) {
        try {
            return await this.commentsRepository.count(where);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при получении количества комментариев');
        }
    }
    async find(filter) {
        try {
            return await this.commentsRepository.find(filter);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при получении комментария');
        }
    }
    async updateAll(comments, where) {
        try {
            return await this.commentsRepository.updateAll(comments, where);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при обновлении комментариев');
        }
    }
    async findById(id, filter) {
        try {
            return await this.commentsRepository.findById(id, filter);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при получении комментария');
        }
    }
    async updateById(id, comments) {
        try {
            await this.commentsRepository.updateById(id, comments);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при обновлении комментария');
        }
    }
    async replaceById(id, comments) {
        try {
            await this.commentsRepository.replaceById(id, comments);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при обновлении комментария');
        }
    }
    async deleteById(id) {
        try {
            await this.commentsRepository.deleteById(id);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при удалении комментария');
        }
    }
};
tslib_1.__decorate([
    rest_1.post('/comments', {
        responses: {
            '200': {
                description: 'Comments model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Comments) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Comments, {
                    title: 'NewComments',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentsController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.oas.visibility(rest_1.OperationVisibility.UNDOCUMENTED),
    rest_1.get('/comments/count', {
        responses: {
            '200': {
                description: 'Comments model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Comments)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentsController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/comments', {
        responses: {
            '200': {
                description: 'Array of Comments model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Comments, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Comments)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentsController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.oas.visibility(rest_1.OperationVisibility.UNDOCUMENTED),
    rest_1.patch('/comments', {
        responses: {
            '200': {
                description: 'Comments PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Comments, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Comments)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Comments, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentsController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/comments/{id}', {
        responses: {
            '200': {
                description: 'Comments model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Comments, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Comments, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentsController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.oas.visibility(rest_1.OperationVisibility.UNDOCUMENTED),
    rest_1.patch('/comments/{id}', {
        responses: {
            '204': {
                description: 'Comments PATCH success',
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
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Comments]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentsController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/comments/{id}', {
        responses: {
            '204': {
                description: 'Comments PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')), tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Comments]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentsController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/comments/{id}', {
        responses: {
            '204': {
                description: 'Comments DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentsController.prototype, "deleteById", null);
CommentsController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.CommentsRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CommentsRepository])
], CommentsController);
exports.CommentsController = CommentsController;
//# sourceMappingURL=comments.controller.js.map