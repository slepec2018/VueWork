import { Entity } from '@loopback/repository';
import { ColumnsWithRelations } from './columns.model';
import { Comments, CommentsWithRelations } from './comments.model';
import { Ticks, TicksWithRelations } from './ticks.model';
import { CustomUserWithRelations } from './user.model';
export declare class Tasks extends Entity {
    id?: number;
    title: string;
    description?: string;
    sortOrder: number;
    dueDate?: string;
    url?: string;
    urlDescription?: string;
    createdAt?: string;
    updatedAt?: string;
    tags?: string;
    comments: Comments[];
    ticks: Ticks[];
    columnId: number;
    statusId: number;
    userId: string;
    constructor(data?: Partial<Tasks>);
}
export interface TasksRelations {
    columns?: ColumnsWithRelations;
    comments?: CommentsWithRelations[];
    user?: CustomUserWithRelations;
    ticks?: TicksWithRelations[];
}
export declare type TasksWithRelations = Tasks & TasksRelations;
