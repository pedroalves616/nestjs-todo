import { User } from './user.model';
export declare class UserService {
    private userModel;
    constructor(userModel: typeof User);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    create(user: Partial<User>): Promise<User>;
    update(id: number, data: Partial<User>): Promise<[affectedCount: number]>;
    delete(id: number): Promise<number>;
}
