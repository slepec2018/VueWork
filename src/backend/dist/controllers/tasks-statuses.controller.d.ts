import { Tasks, Statuses } from '../models';
import { TasksRepository } from '../repositories';
export declare class TasksStatusesController {
    tasksRepository: TasksRepository;
    constructor(tasksRepository: TasksRepository);
    getStatuses(id: typeof Tasks.prototype.id): Promise<Statuses>;
}
