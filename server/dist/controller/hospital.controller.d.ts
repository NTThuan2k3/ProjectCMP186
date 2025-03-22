import { HospitalService } from '../services/hospital.service';
export declare class HospitalController {
    private readonly hospitalService;
    constructor(hospitalService: HospitalService);
    loadHospitals(): Promise<(import("mongoose").Document<unknown, {}, import("../schema/hospital.schema").Hospital> & import("../schema/hospital.schema").Hospital & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    getHospitals(): Promise<(import("mongoose").Document<unknown, {}, import("../schema/hospital.schema").Hospital> & import("../schema/hospital.schema").Hospital & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
}
