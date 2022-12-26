"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsRepository = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
const datasources_1 = require("../datasources");
const core_1 = require("@loopback/core");
let CommentsRepository = class CommentsRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, tasksRepositoryGetter, userRepositoryGetter) {
        super(models_1.Comments, dataSource);
        this.tasksRepositoryGetter = tasksRepositoryGetter;
        this.userRepositoryGetter = userRepositoryGetter;
        this.user = this.createBelongsToAccessorFor('user', userRepositoryGetter);
        this.registerInclusionResolver('user', this.user.inclusionResolver);
        this.task = this.createBelongsToAccessorFor('task', tasksRepositoryGetter);
        this.modelClass.observe('persist', async (ctx) => {
            ctx.data.updatedAt = new Date();
        });
    }
};
CommentsRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.database')),
    tslib_1.__param(1, repository_1.repository.getter('TasksRepository')),
    tslib_1.__param(2, repository_1.repository.getter('UserRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DatabaseDataSource, Function, Function])
], CommentsRepository);
exports.CommentsRepository = CommentsRepository;
//# sourceMappingURL=comments.repository.js.map