import { AuthService } from 'src/services/auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(body: {
        username: string;
        password: string;
    }): Promise<import("mongoose").Document<unknown, {}, import("../schema/user.schema").UserDocument> & import("../schema/user.schema").User & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    login(body: {
        username: string;
        password: string;
        role: string;
    }): Promise<{
        access_token: string;
    }>;
    loginWithGoogle(body: {
        username: string;
        email: string;
    }): Promise<{
        access_token: string;
    }>;
}
