import { Ticks, Tasks } from '../models';
import { TicksRepository } from '../repositories';
export declare class TicksTasksController {
    ticksRepository: TicksRepository;
    constructor(ticksRepository: TicksRepository);
    getTasks(id: typeof Ticks.prototype.id): Promise<Tasks>;
}
