import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { User, UserDocument } from 'src/schema/user.schema';
import { DoctorDocument } from 'src/schema/doctor.schema';
export declare class AuthService {
    private userModel;
    private doctorModel;
    private jwtService;
    private googleClient;
    constructor(userModel: Model<UserDocument>, doctorModel: Model<DoctorDocument>, jwtService: JwtService);
    register(username: string, password: string): Promise<import("mongoose").Document<unknown, {}, UserDocument> & User & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    login(username: string, password: string, role: string): Promise<{
        access_token: string;
    }>;
    loginWithGoogle(username: string, email: string): Promise<{
        access_token: string;
        user: import("mongoose").Document<unknown, {}, UserDocument> & User & import("mongoose").Document<unknown, any, any> & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
    generateAccessToken(user: UserDocument | DoctorDocument): string;
}
