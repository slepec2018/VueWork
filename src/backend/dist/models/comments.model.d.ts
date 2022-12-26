import { Entity } from '@loopback/repository';
import { TasksWithRelations } from './tasks.model';
import { CustomUserWithRelations } from './user.model';
export declare class Comments extends Entity {
    id?: number;
    text: string;
    createdAt?: string;
    updatedAt?: string;
    taskId: number;
    userId: string;
    constructor(data?: Partial<Comments>);
}
export interface CommentsRelations {
    task?: TasksWithRelations;
    user?: CustomUserWithRelations;
}
export declare type CommentsWithRelations = Comments & CommentsRelations;
