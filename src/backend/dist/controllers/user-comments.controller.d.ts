import { Count, Filter, Where } from '@loopback/repository';
import { User, Comments } from '../models';
import { UserRepository } from '../repositories';
export declare class UserCommentsController {
    protected userRepository: UserRepository;
    constructor(userRepository: UserRepository);
    find(id: string, filter?: Filter<Comments>): Promise<Comments[]>;
    create(id: typeof User.prototype.id, comments: Omit<Comments, 'id'>): Promise<Comments>;
    patch(id: string, comments: Partial<Comments>, where?: Where<Comments>): Promise<Count>;
    delete(id: string, where?: Where<Comments>): Promise<Count>;
}
