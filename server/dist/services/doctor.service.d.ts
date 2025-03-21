import { Model } from 'mongoose';
import { Doctor, DoctorDocument } from '../schema/doctor.schema';
import { HospitalService } from './hospital.service';
export declare class DoctorService {
    private doctorModel;
    private hospitalModel;
    private readonly filePath;
    constructor(doctorModel: Model<DoctorDocument>, hospitalModel: HospitalService);
    loadDoctors(): Promise<(import("mongoose").Document<unknown, {}, DoctorDocument> & Doctor & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    getDoctors(): Promise<(import("mongoose").Document<unknown, {}, DoctorDocument> & Doctor & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findByDoctorname(name: string): Promise<Doctor | null>;
    filterDoctors(hospitalName?: string): Promise<(import("mongoose").Document<unknown, {}, DoctorDocument> & Doctor & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    getDoctorById(id: string): Promise<Doctor>;
    updateDoctor(doctorId: string, updateData: Partial<Doctor>): Promise<Doctor>;
    getDoctorProfile(doctorId: string): Promise<Doctor>;
}
