import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { Columns, ColumnsRelations, Tasks } from '../models';
import { DatabaseDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { TasksRepository } from './tasks.repository';
export declare class ColumnsRepository extends DefaultCrudRepository<Columns, typeof Columns.prototype.id, ColumnsRelations> {
    protected tasksRepositoryGetter: Getter<TasksRepository>;
    readonly tasks: HasManyRepositoryFactory<Tasks, typeof Columns.prototype.id>;
    constructor(dataSource: DatabaseDataSource, tasksRepositoryGetter: Getter<TasksRepository>);
}
