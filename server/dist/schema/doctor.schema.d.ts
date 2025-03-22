import { Document } from 'mongoose';
export type DoctorDocument = Doctor & Document;
export declare class Doctor {
    name: string;
    password: string;
    specialty: string;
    hospitalName: string;
    startTime: string;
    endTime: string;
    workingDays: string[];
    role: string;
}
export declare const DoctorSchema: import("mongoose").Schema<Doctor, import("mongoose").Model<Doctor, any, any, any, Document<unknown, any, Doctor> & Doctor & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Doctor, Document<unknown, {}, import("mongoose").FlatRecord<Doctor>> & import("mongoose").FlatRecord<Doctor> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
