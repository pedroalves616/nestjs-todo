import { Column, DataType, Model, Table, ForeignKey, BelongsToMany } from 'sequelize-typescript';
import { User } from '../users/user.model';
import { Tag } from '../tags/tag.model';
import { TaskTag } from '../tasks/tasktag.model';

@Table
export class Task extends Model<Task> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @Column(DataType.TEXT)
  description: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  completed: boolean;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsToMany(() => Tag, () => TaskTag)
  tags: Tag[];
}
