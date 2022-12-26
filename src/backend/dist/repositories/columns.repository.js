"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnsRepository = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
const datasources_1 = require("../datasources");
const core_1 = require("@loopback/core");
let ColumnsRepository = class ColumnsRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, tasksRepositoryGetter) {
        super(models_1.Columns, dataSource);
        this.tasksRepositoryGetter = tasksRepositoryGetter;
        this.tasks = this.createHasManyRepositoryFactoryFor('tasks', tasksRepositoryGetter);
        this.registerInclusionResolver('tasks', this.tasks.inclusionResolver);
    }
};
ColumnsRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.database')),
    tslib_1.__param(1, repository_1.repository.getter('TasksRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DatabaseDataSource, Function])
], ColumnsRepository);
exports.ColumnsRepository = ColumnsRepository;
//# sourceMappingURL=columns.repository.js.map