import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Tasks } from '../models';
import { TasksRepository, UserRepository } from '../repositories';
export declare class TasksController {
    tasksRepository: TasksRepository;
    protected userRepository: UserRepository;
    constructor(tasksRepository: TasksRepository, userRepository: UserRepository);
    create(tasks: Omit<Tasks, 'id'>): Promise<Tasks>;
    count(where?: Where<Tasks>): Promise<Count>;
    find(filter?: Filter<Tasks>): Promise<Tasks[]>;
    updateAll(tasks: Tasks, where?: Where<Tasks>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Tasks>): Promise<Tasks>;
    updateById(id: number, tasks: Tasks): Promise<void>;
    replaceById(id: number, tasks: Tasks): Promise<void>;
    deleteById(id: number): Promise<void>;
}
