import { TagService } from './tag.service';
import { Tag } from './tag.model';
export declare class TagController {
    private readonly tagService;
    constructor(tagService: TagService);
    create(tagData: any): Promise<Tag>;
    findAll(): Promise<Tag[]>;
    findOne(id: string): Promise<Tag>;
    update(id: string, updateData: any): Promise<[number]>;
    remove(id: string): Promise<void>;
}
