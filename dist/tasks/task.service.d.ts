import { Task } from './task.model';
export declare class TaskService {
    private taskModel;
    constructor(taskModel: typeof Task);
    create(taskData: any): Promise<Task>;
    findAll(): Promise<Task[]>;
    findByTags(tagNames: string[]): Promise<Task[]>;
    findOne(id: number): Promise<Task>;
    update(id: number, updateData: any): Promise<[number]>;
    remove(id: number): Promise<void>;
}
