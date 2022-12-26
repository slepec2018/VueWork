import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { Ticks, TicksRelations, Tasks } from '../models';
import { DatabaseDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { TasksRepository } from './tasks.repository';
export declare class TicksRepository extends DefaultCrudRepository<Ticks, typeof Ticks.prototype.id, TicksRelations> {
    protected tasksRepositoryGetter: Getter<TasksRepository>;
    readonly task: BelongsToAccessor<Tasks, typeof Ticks.prototype.id>;
    constructor(dataSource: DatabaseDataSource, tasksRepositoryGetter: Getter<TasksRepository>);
}
