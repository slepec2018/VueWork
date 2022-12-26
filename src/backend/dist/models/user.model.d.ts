import { Entity } from '@loopback/repository';
import { UserCredentials } from './user-credentials.model';
import { Tasks, TasksWithRelations } from './tasks.model';
import { Comments, CommentsWithRelations } from './comments.model';
export declare class User extends Entity {
    id: string;
    name: string;
    email: string;
    isAdmin?: boolean;
    avatar?: string;
    userCredentials: UserCredentials;
    tasks: Tasks[];
    comments: Comments[];
    constructor(data?: Partial<User>);
}
export interface CustomUserRelations {
    tasks?: TasksWithRelations[];
    comments?: CommentsWithRelations[];
}
export declare type CustomUserWithRelations = User & CustomUserRelations;
