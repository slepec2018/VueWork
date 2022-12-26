import { DefaultCrudRepository, HasOneRepositoryFactory, HasManyRepositoryFactory } from '@loopback/repository';
import { User, CustomUserRelations, UserCredentials, Tasks, Comments } from '../models';
import { DatabaseDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { UserCredentialsRepository } from './user-credentials.repository';
import { TasksRepository } from './tasks.repository';
import { CommentsRepository } from './comments.repository';
export declare class UserRepository extends DefaultCrudRepository<User, typeof User.prototype.id, CustomUserRelations> {
    protected userCredentialsRepositoryGetter: Getter<UserCredentialsRepository>;
    protected tasksRepositoryGetter: Getter<TasksRepository>;
    protected commentsRepositoryGetter: Getter<CommentsRepository>;
    readonly customUserCredentials: HasOneRepositoryFactory<UserCredentials, typeof User.prototype.id>;
    readonly tasks: HasManyRepositoryFactory<Tasks, typeof User.prototype.id>;
    readonly comments: HasManyRepositoryFactory<Comments, typeof User.prototype.id>;
    constructor(dataSource: DatabaseDataSource, userCredentialsRepositoryGetter: Getter<UserCredentialsRepository>, tasksRepositoryGetter: Getter<TasksRepository>, commentsRepositoryGetter: Getter<CommentsRepository>);
    findCredentials(userId: typeof User.prototype.id): Promise<UserCredentials | undefined>;
}
