"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCommentsController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let UserCommentsController = class UserCommentsController {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async find(id, filter) {
        try {
            return await this.userRepository.comments(id).find(filter);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при получении комментариев');
        }
    }
    async create(id, comments) {
        try {
            return await this.userRepository.comments(id).create(comments);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при создании комментариев');
        }
    }
    async patch(id, comments, where) {
        try {
            return await this.userRepository.comments(id).patch(comments, where);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при обновлении комментариев');
        }
    }
    async delete(id, where) {
        try {
            return await this.userRepository.comments(id).delete(where);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при удалении комментариев');
        }
    }
};
tslib_1.__decorate([
    rest_1.get('/users/{id}/comments', {
        responses: {
            '200': {
                description: 'Array of User has many Comments',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Comments) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserCommentsController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.post('/users/{id}/comments', {
        responses: {
            '200': {
                description: 'User model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Comments) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Comments, {
                    title: 'NewCommentsInUser',
                    exclude: ['id'],
                    optional: ['userId'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserCommentsController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.patch('/users/{id}/comments', {
        responses: {
            '200': {
                description: 'User.Comments PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Comments, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Comments))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserCommentsController.prototype, "patch", null);
tslib_1.__decorate([
    rest_1.del('/users/{id}/comments', {
        responses: {
            '200': {
                description: 'User.Comments DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Comments))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserCommentsController.prototype, "delete", null);
UserCommentsController = tslib_1.__decorate([
    rest_1.oas.visibility(rest_1.OperationVisibility.UNDOCUMENTED),
    tslib_1.__param(0, repository_1.repository(repositories_1.UserRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UserRepository])
], UserCommentsController);
exports.UserCommentsController = UserCommentsController;
//# sourceMappingURL=user-comments.controller.js.map