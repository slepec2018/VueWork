import { Count, Filter, Where } from '@loopback/repository';
import { Columns, Tasks } from '../models';
import { ColumnsRepository } from '../repositories';
export declare class ColumnsTasksController {
    protected columnsRepository: ColumnsRepository;
    constructor(columnsRepository: ColumnsRepository);
    find(id: number, filter?: Filter<Tasks>): Promise<Tasks[]>;
    create(id: typeof Columns.prototype.id, tasks: Omit<Tasks, 'id'>): Promise<Tasks>;
    patch(id: number, tasks: Partial<Tasks>, where?: Where<Tasks>): Promise<Count>;
    delete(id: number, where?: Where<Tasks>): Promise<Count>;
}
