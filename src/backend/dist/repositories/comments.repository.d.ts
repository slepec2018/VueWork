import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { Comments, CommentsRelations, Tasks, User } from '../models';
import { DatabaseDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { TasksRepository } from './tasks.repository';
import { UserRepository } from './user.repository';
export declare class CommentsRepository extends DefaultCrudRepository<Comments, typeof Comments.prototype.id, CommentsRelations> {
    protected tasksRepositoryGetter: Getter<TasksRepository>;
    protected userRepositoryGetter: Getter<UserRepository>;
    readonly task: BelongsToAccessor<Tasks, typeof Comments.prototype.id>;
    readonly user: BelongsToAccessor<User, typeof Comments.prototype.id>;
    constructor(dataSource: DatabaseDataSource, tasksRepositoryGetter: Getter<TasksRepository>, userRepositoryGetter: Getter<UserRepository>);
}
