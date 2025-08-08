import { User } from '../users/user.model';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: typeof User, jwtService: JwtService);
    register(userData: any): Promise<{
        token: string;
    }>;
    login(userData: any): Promise<{
        token: string;
    }>;
}
