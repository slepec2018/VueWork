import { Comments, Tasks } from '../models';
import { CommentsRepository } from '../repositories';
export declare class CommentsTasksController {
    commentsRepository: CommentsRepository;
    constructor(commentsRepository: CommentsRepository);
    getTasks(id: typeof Comments.prototype.id): Promise<Tasks>;
}
