import { UserService } from './user.service';
import { User } from './user.model';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    create(user: Partial<User>): Promise<User>;
    update(id: number, data: Partial<User>): Promise<[affectedCount: number]>;
    delete(id: number): Promise<number>;
}
