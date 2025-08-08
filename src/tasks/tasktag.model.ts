import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Task } from './task.model';
import { Tag } from '../tags/tag.model';

@Table
export class TaskTag extends Model {
  @ForeignKey(() => Task)
  @Column
  taskId: number;

  @ForeignKey(() => Tag)
  @Column
  tagId: number;
}