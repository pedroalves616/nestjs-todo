// src/tags/tag.model.ts
import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { TaskTag } from '../tasks/tasktag.model';

@Table
export class Tag extends Model<Tag> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @HasMany(() => TaskTag)
  taskTags: TaskTag[];
}
