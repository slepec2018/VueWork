import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { Statuses, StatusesRelations, Tasks } from '../models';
import { DatabaseDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { TasksRepository } from './tasks.repository';
export declare class StatusesRepository extends DefaultCrudRepository<Statuses, typeof Statuses.prototype.id, StatusesRelations> {
    protected tasksRepositoryGetter: Getter<TasksRepository>;
    readonly tasks: HasManyRepositoryFactory<Tasks, typeof Statuses.prototype.id>;
    constructor(dataSource: DatabaseDataSource, tasksRepositoryGetter: Getter<TasksRepository>);
}
