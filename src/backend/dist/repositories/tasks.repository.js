"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksRepository = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
const datasources_1 = require("../datasources");
const core_1 = require("@loopback/core");
let TasksRepository = class TasksRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, columnsRepositoryGetter, commentsRepositoryGetter, ticksRepositoryGetter, statusesRepositoryGetter, userRepositoryGetter) {
        super(models_1.Tasks, dataSource);
        this.columnsRepositoryGetter = columnsRepositoryGetter;
        this.commentsRepositoryGetter = commentsRepositoryGetter;
        this.ticksRepositoryGetter = ticksRepositoryGetter;
        this.statusesRepositoryGetter = statusesRepositoryGetter;
        this.userRepositoryGetter = userRepositoryGetter;
        this.user = this.createBelongsToAccessorFor('user', userRepositoryGetter);
        this.registerInclusionResolver('user', this.user.inclusionResolver);
        this.status = this.createBelongsToAccessorFor('status', statusesRepositoryGetter);
        this.registerInclusionResolver('status', this.status.inclusionResolver);
        this.ticks = this.createHasManyRepositoryFactoryFor('ticks', ticksRepositoryGetter);
        this.registerInclusionResolver('ticks', this.ticks.inclusionResolver);
        this.comments = this.createHasManyRepositoryFactoryFor('comments', commentsRepositoryGetter);
        this.registerInclusionResolver('comments', this.comments.inclusionResolver);
        this.column = this.createBelongsToAccessorFor('column', columnsRepositoryGetter);
        this.modelClass.observe('persist', async (ctx) => {
            ctx.data.updatedAt = new Date();
        });
    }
};
TasksRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.database')),
    tslib_1.__param(1, repository_1.repository.getter('ColumnsRepository')),
    tslib_1.__param(2, repository_1.repository.getter('CommentsRepository')),
    tslib_1.__param(3, repository_1.repository.getter('TicksRepository')),
    tslib_1.__param(4, repository_1.repository.getter('StatusesRepository')),
    tslib_1.__param(5, repository_1.repository.getter('UserRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DatabaseDataSource, Function, Function, Function, Function, Function])
], TasksRepository);
exports.TasksRepository = TasksRepository;
//# sourceMappingURL=tasks.repository.js.map