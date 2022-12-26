import { Entity } from '@loopback/repository';
import { Tasks, TasksWithRelations } from './tasks.model';
export declare class Columns extends Entity {
    id?: number;
    title: string;
    tasks: Tasks[];
    constructor(data?: Partial<Columns>);
}
export interface ColumnsRelations {
    tasks?: TasksWithRelations[];
}
export declare type ColumnsWithRelations = Columns & ColumnsRelations;
