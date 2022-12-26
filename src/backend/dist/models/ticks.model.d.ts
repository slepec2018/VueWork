import { Entity } from '@loopback/repository';
export declare class Ticks extends Entity {
    id?: number;
    text: string;
    done: boolean;
    taskId: number;
    constructor(data?: Partial<Ticks>);
}
export interface TicksRelations {
}
export declare type TicksWithRelations = Ticks & TicksRelations;
