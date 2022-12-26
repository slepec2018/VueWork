import { Comments, User } from '../models';
import { CommentsRepository } from '../repositories';
export declare class CommentsUserController {
    commentsRepository: CommentsRepository;
    constructor(commentsRepository: CommentsRepository);
    getUser(id: typeof Comments.prototype.id): Promise<User>;
}
