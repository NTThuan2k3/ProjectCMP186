import { Model } from 'mongoose';
import { Hospital } from '../schema/hospital.schema';
export declare class HospitalService {
    private hospitalModel;
    private readonly filePath;
    constructor(hospitalModel: Model<Hospital>);
    loadHospitals(): Promise<(import("mongoose").Document<unknown, {}, Hospital> & Hospital & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    getHospitals(): Promise<(import("mongoose").Document<unknown, {}, Hospital> & Hospital & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findByDistrict(district: string): Promise<(import("mongoose").Document<unknown, {}, Hospital> & Hospital & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findByName(hospitalName: string): Promise<import("mongoose").Document<unknown, {}, Hospital> & Hospital & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
