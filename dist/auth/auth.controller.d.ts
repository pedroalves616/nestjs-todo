import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(userData: any): Promise<{
        token: string;
    }>;
    login(userData: any): Promise<{
        token: string;
    }>;
}
