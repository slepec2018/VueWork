import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Ticks } from '../models';
import { TicksRepository } from '../repositories';
export declare class TicksController {
    ticksRepository: TicksRepository;
    constructor(ticksRepository: TicksRepository);
    create(ticks: Omit<Ticks, 'id'>): Promise<Ticks>;
    count(where?: Where<Ticks>): Promise<Count>;
    find(filter?: Filter<Ticks>): Promise<Ticks[]>;
    updateAll(ticks: Ticks, where?: Where<Ticks>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Ticks>): Promise<Ticks>;
    updateById(id: number, ticks: Ticks): Promise<void>;
    replaceById(id: number, ticks: Ticks): Promise<void>;
    deleteById(id: number): Promise<void>;
}
