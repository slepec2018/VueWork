"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsTasksController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CommentsTasksController = class CommentsTasksController {
    constructor(commentsRepository) {
        this.commentsRepository = commentsRepository;
    }
    async getTasks(id) {
        try {
            return await this.commentsRepository.task(id);
        }
        catch (_a) {
            throw new rest_1.HttpErrors['400']('Возникла ошибка при получении задач');
        }
    }
};
tslib_1.__decorate([
    rest_1.get('/comments/{id}/tasks', {
        responses: {
            '200': {
                description: 'Tasks belonging to Comments',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Tasks) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentsTasksController.prototype, "getTasks", null);
CommentsTasksController = tslib_1.__decorate([
    rest_1.oas.visibility(rest_1.OperationVisibility.UNDOCUMENTED),
    tslib_1.__param(0, repository_1.repository(repositories_1.CommentsRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CommentsRepository])
], CommentsTasksController);
exports.CommentsTasksController = CommentsTasksController;
//# sourceMappingURL=comments-tasks.controller.js.map