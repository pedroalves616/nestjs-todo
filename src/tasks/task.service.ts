import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Task } from './task.model';
import { Tag } from '../tags/tag.model';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task)
    private taskModel: typeof Task,
  ) {}

  async create(taskData: any): Promise<Task> {
    const { tags, ...data } = taskData;
    const task = await this.taskModel.create(data);
    if (tags) await task.$set('tags', tags);
    return task;
  }

  async findAll(): Promise<Task[]> {
    return this.taskModel.findAll({ include: [Tag] });
  }

  async findByTags(tagNames: string[]): Promise<Task[]> {
    return this.taskModel.findAll({
      include: [{
        model: Tag,
        where: { name: tagNames }
      }]
    });
  }

  async findOne(id: number): Promise<Task> {
    return this.taskModel.findByPk(id, { include: [Tag] });
  }

  async update(id: number, updateData: any): Promise<[number]> {
    const { tags, ...data } = updateData;
    const task = await this.taskModel.findByPk(id);
    if (tags && task) await task.$set('tags', tags);
    return this.taskModel.update(data, { where: { id } });
  }

  async remove(id: number): Promise<void> {
    const task = await this.taskModel.findByPk(id);
    if (task) await task.destroy();
  }
}
