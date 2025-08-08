import { Tag } from './tag.model';
export declare class TagService {
    private tagModel;
    constructor(tagModel: typeof Tag);
    create(tagData: any): Promise<Tag>;
    findAll(): Promise<Tag[]>;
    findOne(id: number): Promise<Tag>;
    update(id: number, updateData: any): Promise<[number]>;
    remove(id: number): Promise<void>;
}
