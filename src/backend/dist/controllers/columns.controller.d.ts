import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Columns } from '../models';
import { ColumnsRepository } from '../repositories';
export declare class ColumnsController {
    columnsRepository: ColumnsRepository;
    constructor(columnsRepository: ColumnsRepository);
    create(columns: Omit<Columns, 'id'>): Promise<Columns>;
    count(where?: Where<Columns>): Promise<Count>;
    find(filter?: Filter<Columns>): Promise<Columns[]>;
    updateAll(columns: Columns, where?: Where<Columns>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Columns>): Promise<Columns>;
    updateById(id: number, columns: Columns): Promise<void>;
    replaceById(id: number, columns: Columns): Promise<void>;
    deleteById(id: number): Promise<void>;
}
