import { Entity } from '@loopback/repository';
import { Tasks } from './tasks.model';
export declare class Statuses extends Entity {
    id?: number;
    name: string;
    tasks: Tasks[];
    constructor(data?: Partial<Statuses>);
}
export interface StatusesRelations {
}
export declare type StatusesWithRelations = Statuses & StatusesRelations;
