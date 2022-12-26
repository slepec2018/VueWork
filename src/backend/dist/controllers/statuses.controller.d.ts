import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Statuses } from '../models';
import { StatusesRepository } from '../repositories';
export declare class StatusesController {
    statusesRepository: StatusesRepository;
    constructor(statusesRepository: StatusesRepository);
    create(statuses: Omit<Statuses, 'id'>): Promise<Statuses>;
    count(where?: Where<Statuses>): Promise<Count>;
    find(filter?: Filter<Statuses>): Promise<Statuses[]>;
    updateAll(statuses: Statuses, where?: Where<Statuses>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Statuses>): Promise<Statuses>;
    updateById(id: number, statuses: Statuses): Promise<void>;
    replaceById(id: number, statuses: Statuses): Promise<void>;
    deleteById(id: number): Promise<void>;
}
