import { DefaultCrudRepository, BelongsToAccessor, HasManyRepositoryFactory } from '@loopback/repository';
import { Tasks, TasksRelations, Columns, Comments, Ticks, Statuses, User } from '../models';
import { DatabaseDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { ColumnsRepository } from './columns.repository';
import { CommentsRepository } from './comments.repository';
import { TicksRepository } from './ticks.repository';
import { StatusesRepository } from './statuses.repository';
import { UserRepository } from './user.repository';
export declare class TasksRepository extends DefaultCrudRepository<Tasks, typeof Tasks.prototype.id, TasksRelations> {
    protected columnsRepositoryGetter: Getter<ColumnsRepository>;
    protected commentsRepositoryGetter: Getter<CommentsRepository>;
    protected ticksRepositoryGetter: Getter<TicksRepository>;
    protected statusesRepositoryGetter: Getter<StatusesRepository>;
    protected userRepositoryGetter: Getter<UserRepository>;
    readonly column: BelongsToAccessor<Columns, typeof Tasks.prototype.id>;
    readonly comments: HasManyRepositoryFactory<Comments, typeof Tasks.prototype.id>;
    readonly ticks: HasManyRepositoryFactory<Ticks, typeof Tasks.prototype.id>;
    readonly status: BelongsToAccessor<Statuses, typeof Tasks.prototype.id>;
    readonly user: BelongsToAccessor<User, typeof Tasks.prototype.id>;
    constructor(dataSource: DatabaseDataSource, columnsRepositoryGetter: Getter<ColumnsRepository>, commentsRepositoryGetter: Getter<CommentsRepository>, ticksRepositoryGetter: Getter<TicksRepository>, statusesRepositoryGetter: Getter<StatusesRepository>, userRepositoryGetter: Getter<UserRepository>);
}
