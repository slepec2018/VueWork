"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Statuses = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const tasks_model_1 = require("./tasks.model");
let Statuses = class Statuses extends repository_1.Entity {
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
], Statuses.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Statuses.prototype, "name", void 0);
tslib_1.__decorate([
    repository_1.hasMany(() => tasks_model_1.Tasks, { keyTo: 'statusId' }),
    tslib_1.__metadata("design:type", Array)
], Statuses.prototype, "tasks", void 0);
Statuses = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Statuses);
exports.Statuses = Statuses;
//# sourceMappingURL=statuses.model.js.map