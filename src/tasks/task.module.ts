import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Task } from './task.model';
import { TaskTag } from './tasktag.model';
import { Tag } from '../tags/tag.model';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';

@Module({
  imports: [SequelizeModule.forFeature([Task, TaskTag, Tag])],
  providers: [TaskService],
  controllers: [TaskController],
})
export class TaskModule {}
