"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tasks = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const columns_model_1 = require("./columns.model");
const comments_model_1 = require("./comments.model");
const ticks_model_1 = require("./ticks.model");
const statuses_model_1 = require("./statuses.model");
const user_model_1 = require("./user.model");
let Tasks = class Tasks extends repository_1.Entity {
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
], Tasks.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Tasks.prototype, "title", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        jsonSchema: {
            nullable: true
        }
    }),
    tslib_1.__metadata("design:type", String)
], Tasks.prototype, "description", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Tasks.prototype, "sortOrder", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        jsonSchema: {
            nullable: true
        }
    }),
    tslib_1.__metadata("design:type", String)
], Tasks.prototype, "dueDate", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        jsonSchema: {
            nullable: true
        }
    }),
    tslib_1.__metadata("design:type", String)
], Tasks.prototype, "url", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        jsonSchema: {
            nullable: true
        }
    }),
    tslib_1.__metadata("design:type", String)
], Tasks.prototype, "urlDescription", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        default: () => new Date(),
    }),
    tslib_1.__metadata("design:type", String)
], Tasks.prototype, "createdAt", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        default: () => new Date(),
    }),
    tslib_1.__metadata("design:type", String)
], Tasks.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        jsonSchema: {
            nullable: true
        }
    }),
    tslib_1.__metadata("design:type", String)
], Tasks.prototype, "tags", void 0);
tslib_1.__decorate([
    repository_1.hasMany(() => comments_model_1.Comments, { keyTo: 'taskId' }),
    tslib_1.__metadata("design:type", Array)
], Tasks.prototype, "comments", void 0);
tslib_1.__decorate([
    repository_1.hasMany(() => ticks_model_1.Ticks, { keyTo: 'taskId' }),
    tslib_1.__metadata("design:type", Array)
], Tasks.prototype, "ticks", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => columns_model_1.Columns, {}, { jsonSchema: { nullable: true } }),
    tslib_1.__metadata("design:type", Number)
], Tasks.prototype, "columnId", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => statuses_model_1.Statuses, {}, { jsonSchema: { nullable: true } }),
    tslib_1.__metadata("design:type", Number)
], Tasks.prototype, "statusId", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => user_model_1.User, {}, { jsonSchema: { nullable: true } }),
    tslib_1.__metadata("design:type", String)
], Tasks.prototype, "userId", void 0);
Tasks = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Tasks);
exports.Tasks = Tasks;
//# sourceMappingURL=tasks.model.js.map