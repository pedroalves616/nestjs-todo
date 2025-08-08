import { Model } from 'sequelize-typescript';
export declare class TaskTag extends Model<TaskTag> {
    taskId: number;
    tagId: number;
}
