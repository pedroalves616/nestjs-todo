import { Table, Column, Model, HasMany, DataType } from 'sequelize-typescript';
import { Task } from '../tasks/task.model';

@Table
export class User extends Model {
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @HasMany(() => Task)
  tasks: Task[];
}
