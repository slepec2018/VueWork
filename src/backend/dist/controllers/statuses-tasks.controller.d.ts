import { Count, Filter, Where } from '@loopback/repository';
import { Statuses, Tasks } from '../models';
import { StatusesRepository } from '../repositories';
export declare class StatusesTasksController {
    protected statusesRepository: StatusesRepository;
    constructor(statusesRepository: StatusesRepository);
    find(id: number, filter?: Filter<Tasks>): Promise<Tasks[]>;
    create(id: typeof Statuses.prototype.id, tasks: Omit<Tasks, 'id'>): Promise<Tasks>;
    patch(id: number, tasks: Partial<Tasks>, where?: Where<Tasks>): Promise<Count>;
    delete(id: number, where?: Where<Tasks>): Promise<Count>;
}
