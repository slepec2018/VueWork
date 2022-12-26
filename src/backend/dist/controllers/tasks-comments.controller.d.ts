import { Count, Filter, Where } from '@loopback/repository';
import { Tasks, Comments } from '../models';
import { TasksRepository } from '../repositories';
export declare class TasksCommentsController {
    protected tasksRepository: TasksRepository;
    constructor(tasksRepository: TasksRepository);
    find(id: number, filter?: Filter<Comments>): Promise<Comments[]>;
    create(id: typeof Tasks.prototype.id, comments: Omit<Comments, 'id'>): Promise<Comments>;
    patch(id: number, comments: Partial<Comments>, where?: Where<Comments>): Promise<Count>;
    delete(id: number, where?: Where<Comments>): Promise<Count>;
}
