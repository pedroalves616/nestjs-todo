import { Controller, Get, Post, Body, Param, Delete, Put, Query } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.model';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() taskData: any): Promise<Task> {
    return this.taskService.create(taskData);
  }

  @Get()
  findAll(@Query('tags') tags: string): Promise<Task[]> {
    if (tags) {
      const tagArray = tags.split(',');
      return this.taskService.findByTags(tagArray);
    }
    return this.taskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Task> {
    return this.taskService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateData: any): Promise<[number]> {
    return this.taskService.update(+id, updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.taskService.remove(+id);
  }
}
