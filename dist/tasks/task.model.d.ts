import { Model } from 'sequelize-typescript';
import { Tag } from '../tags/tag.model';
export declare class Task extends Model<Task> {
    title: string;
    description: string;
    completed: boolean;
    userId: number;
    tags: Tag[];
}
