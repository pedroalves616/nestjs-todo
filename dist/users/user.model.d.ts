import { Model } from 'sequelize-typescript';
import { Task } from '../tasks/task.model';
export declare class User extends Model {
    email: string;
    password: string;
    tasks: Task[];
}
