"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsUserController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CommentsUserController = class CommentsUserController {
    constructor(commentsRepository) {
        this.commentsRepository = commentsRepository;
    }
    async getUser(id) {
        try {
            return await this.commentsRepository.user(id);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при получении юзера');
        }
    }
};
tslib_1.__decorate([
    rest_1.get('/comments/{id}/user', {
        responses: {
            '200': {
                description: 'User belonging to Comments',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.User) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentsUserController.prototype, "getUser", null);
CommentsUserController = tslib_1.__decorate([
    rest_1.oas.visibility(rest_1.OperationVisibility.UNDOCUMENTED),
    tslib_1.__param(0, repository_1.repository(repositories_1.CommentsRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CommentsRepository])
], CommentsUserController);
exports.CommentsUserController = CommentsUserController;
//# sourceMappingURL=comments-user.controller.js.map