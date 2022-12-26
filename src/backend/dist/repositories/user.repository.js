"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
const datasources_1 = require("../datasources");
const core_1 = require("@loopback/core");
let UserRepository = class UserRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, userCredentialsRepositoryGetter, tasksRepositoryGetter, commentsRepositoryGetter) {
        super(models_1.User, dataSource);
        this.userCredentialsRepositoryGetter = userCredentialsRepositoryGetter;
        this.tasksRepositoryGetter = tasksRepositoryGetter;
        this.commentsRepositoryGetter = commentsRepositoryGetter;
        this.comments = this.createHasManyRepositoryFactoryFor('comments', commentsRepositoryGetter);
        this.registerInclusionResolver('comments', this.comments.inclusionResolver);
        this.tasks = this.createHasManyRepositoryFactoryFor('tasks', tasksRepositoryGetter);
        this.registerInclusionResolver('tasks', this.tasks.inclusionResolver);
        this.customUserCredentials = this.createHasOneRepositoryFactoryFor('userCredentials', userCredentialsRepositoryGetter);
        this.registerInclusionResolver('userCredentials', this.customUserCredentials.inclusionResolver);
    }
    async findCredentials(userId) {
        try {
            return await this.customUserCredentials(userId).get();
        }
        catch (err) {
            if (err.code === 'ENTITY_NOT_FOUND') {
                return undefined;
            }
            throw err;
        }
    }
};
UserRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.database')),
    tslib_1.__param(1, repository_1.repository.getter('UserCredentialsRepository')),
    tslib_1.__param(2, repository_1.repository.getter('TasksRepository')),
    tslib_1.__param(3, repository_1.repository.getter('CommentsRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DatabaseDataSource, Function, Function, Function])
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map