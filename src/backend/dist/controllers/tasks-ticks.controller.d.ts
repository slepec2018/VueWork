import { Count, Filter, Where } from '@loopback/repository';
import { Tasks, Ticks } from '../models';
import { TasksRepository } from '../repositories';
export declare class TasksTicksController {
    protected tasksRepository: TasksRepository;
    constructor(tasksRepository: TasksRepository);
    find(id: number, filter?: Filter<Ticks>): Promise<Ticks[]>;
    create(id: typeof Tasks.prototype.id, ticks: Omit<Ticks, 'id'>): Promise<Ticks>;
    patch(id: number, ticks: Partial<Ticks>, where?: Where<Ticks>): Promise<Count>;
    delete(id: number, where?: Where<Ticks>): Promise<Count>;
}
