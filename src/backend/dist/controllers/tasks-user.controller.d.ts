import { Tasks, User } from '../models';
import { TasksRepository } from '../repositories';
export declare class TasksUserController {
    tasksRepository: TasksRepository;
    constructor(tasksRepository: TasksRepository);
    getUser(id: typeof Tasks.prototype.id): Promise<User>;
}
