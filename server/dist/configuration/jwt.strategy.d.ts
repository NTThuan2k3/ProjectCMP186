import { Strategy } from 'passport-jwt';
import { UserService } from 'src/services/user.service';
import { DoctorService } from 'src/services/doctor.service';
import { User } from 'src/schema/user.schema';
import { Doctor } from 'src/schema/doctor.schema';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private usersService;
    private doctorService;
    constructor(usersService: UserService, doctorService: DoctorService);
    validate(payload: any): Promise<User | Doctor>;
}
export {};
