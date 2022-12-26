import { Tasks, Columns } from '../models';
import { TasksRepository } from '../repositories';
export declare class TasksColumnsController {
    tasksRepository: TasksRepository;
    constructor(tasksRepository: TasksRepository);
    getColumns(id: typeof Tasks.prototype.id): Promise<Columns>;
}
