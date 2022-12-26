"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Columns = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const tasks_model_1 = require("./tasks.model");
let Columns = class Columns extends repository_1.Entity {
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
], Columns.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Columns.prototype, "title", void 0);
tslib_1.__decorate([
    repository_1.hasMany(() => tasks_model_1.Tasks, { keyTo: 'columnId' }),
    tslib_1.__metadata("design:type", Array)
], Columns.prototype, "tasks", void 0);
Columns = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Columns);
exports.Columns = Columns;
//# sourceMappingURL=columns.model.js.map