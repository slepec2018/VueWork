"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicksRepository = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
const datasources_1 = require("../datasources");
const core_1 = require("@loopback/core");
let TicksRepository = class TicksRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, tasksRepositoryGetter) {
        super(models_1.Ticks, dataSource);
        this.tasksRepositoryGetter = tasksRepositoryGetter;
        this.task = this.createBelongsToAccessorFor('task', tasksRepositoryGetter);
    }
};
TicksRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.database')),
    tslib_1.__param(1, repository_1.repository.getter('TasksRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DatabaseDataSource, Function])
], TicksRepository);
exports.TicksRepository = TicksRepository;
//# sourceMappingURL=ticks.repository.js.map