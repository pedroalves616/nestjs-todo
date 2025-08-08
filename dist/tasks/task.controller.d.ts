import { TaskService } from './task.service';
import { Task } from './task.model';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    create(taskData: any): Promise<Task>;
    findAll(tags: string): Promise<Task[]>;
    findOne(id: string): Promise<Task>;
    update(id: string, updateData: any): Promise<[number]>;
    remove(id: string): Promise<void>;
}
