import { User } from '../schema/user.schema';
import { Request } from 'express';
import { UserService } from 'src/services/user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAllUsers(): Promise<User[]>;
    getCurrentUserId(req: Request): Promise<{
        userId: any;
    }>;
    getProfile(req: Request): Promise<User>;
    getUserById(id: string): Promise<User>;
    getCurrentUserName(req: Request): Promise<{
        username: any;
    }>;
    updateUser(req: Request, updateData: Partial<User>): Promise<User>;
}
