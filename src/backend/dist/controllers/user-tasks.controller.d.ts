import { Count, Filter, Where } from '@loopback/repository';
import { User, Tasks } from '../models';
import { UserRepository } from '../repositories';
export declare class UserTasksController {
    protected userRepository: UserRepository;
    constructor(userRepository: UserRepository);
    find(id: string, filter?: Filter<Tasks>): Promise<Tasks[]>;
    create(id: typeof User.prototype.id, tasks: Omit<Tasks, 'id'>): Promise<Tasks>;
    patch(id: string, tasks: Partial<Tasks>, where?: Where<Tasks>): Promise<Count>;
    delete(id: string, where?: Where<Tasks>): Promise<Count>;
}
