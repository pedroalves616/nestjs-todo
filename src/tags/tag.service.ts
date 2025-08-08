import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Tag } from './tag.model';

@Injectable()
export class TagService {
  constructor(
    @InjectModel(Tag)
    private tagModel: typeof Tag,
  ) {}

  create(tagData: any): Promise<Tag> {
    return this.tagModel.create(tagData);
  }

  findAll(): Promise<Tag[]> {
    return this.tagModel.findAll();
  }

  findOne(id: number): Promise<Tag> {
    return this.tagModel.findByPk(id);
  }

  update(id: number, updateData: any): Promise<[number]> {
    return this.tagModel.update(updateData, { where: { id } });
  }

  async remove(id: number): Promise<void> {
    const tag = await this.tagModel.findByPk(id);
    if (tag) await tag.destroy();
  }
}
