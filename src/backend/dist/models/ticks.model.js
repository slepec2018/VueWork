"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ticks = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const tasks_model_1 = require("./tasks.model");
let Ticks = class Ticks extends repository_1.Entity {
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
], Ticks.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Ticks.prototype, "text", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'boolean',
        required: true,
    }),
    tslib_1.__metadata("design:type", Boolean)
], Ticks.prototype, "done", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => tasks_model_1.Tasks, {}, { jsonSchema: { nullable: true } }),
    tslib_1.__metadata("design:type", Number)
], Ticks.prototype, "taskId", void 0);
Ticks = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Ticks);
exports.Ticks = Ticks;
//# sourceMappingURL=ticks.model.js.map