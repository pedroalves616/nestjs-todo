import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TagService } from './tag.service';
import { Tag } from './tag.model';

@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Post()
  create(@Body() tagData: any): Promise<Tag> {
    return this.tagService.create(tagData);
  }

  @Get()
  findAll(): Promise<Tag[]> {
    return this.tagService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Tag> {
    return this.tagService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateData: any): Promise<[number]> {
    return this.tagService.update(+id, updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.tagService.remove(+id);
  }
}
