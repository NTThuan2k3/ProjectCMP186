import { Model } from 'mongoose';
import { User, UserDocument } from '../schema/user.schema';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    findAll(): Promise<User[]>;
    findByUsername(username: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    getUserName(userId: string): Promise<User>;
    create(userData: Partial<User>): Promise<User>;
    updateUser(userId: string, updateData: Partial<User>): Promise<User>;
    getUserProfile(userId: string): Promise<User>;
}
