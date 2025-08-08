import { Model } from 'sequelize-typescript';
import { TaskTag } from '../tasks/tasktag.model';
export declare class Tag extends Model<Tag> {
    name: string;
    taskTags: TaskTag[];
}
