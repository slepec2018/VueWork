"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comments = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const tasks_model_1 = require("./tasks.model");
const user_model_1 = require("./user.model");
let Comments = class Comments extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Comments.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Comments.prototype, "text", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        default: () => new Date(),
    }),
    tslib_1.__metadata("design:type", String)
], Comments.prototype, "createdAt", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        default: () => new Date(),
    }),
    tslib_1.__metadata("design:type", String)
], Comments.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => tasks_model_1.Tasks, {}, { jsonSchema: { nullable: true } }),
    tslib_1.__metadata("design:type", Number)
], Comments.prototype, "taskId", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => user_model_1.User, {}, { jsonSchema: { nullable: true } }),
    tslib_1.__metadata("design:type", String)
], Comments.prototype, "userId", void 0);
Comments = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Comments);
exports.Comments = Comments;
//# sourceMappingURL=comments.model.js.map