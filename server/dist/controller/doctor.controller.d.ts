import { DoctorService } from '../services/doctor.service';
import { Request } from 'express';
import { Doctor } from 'src/schema/doctor.schema';
export declare class DoctorController {
    private readonly doctorService;
    constructor(doctorService: DoctorService);
    loadDoctors(): Promise<(import("mongoose").Document<unknown, {}, import("src/schema/doctor.schema").DoctorDocument> & Doctor & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    getDoctors(): Promise<(import("mongoose").Document<unknown, {}, import("src/schema/doctor.schema").DoctorDocument> & Doctor & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    filterDoctors(hospitalName?: string): Promise<(import("mongoose").Document<unknown, {}, import("src/schema/doctor.schema").DoctorDocument> & Doctor & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    getCurrentDoctorId(req: Request): Promise<{
        userId: any;
    }>;
    getProfile(req: Request): Promise<Doctor>;
    getDoctorById(id: string): Promise<Doctor>;
    updateUser(req: Request, updateData: Partial<Doctor>): Promise<Doctor>;
}
