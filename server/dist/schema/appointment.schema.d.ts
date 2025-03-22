import { Document, Types } from 'mongoose';
import { User } from './user.schema';
import { Doctor } from './doctor.schema';
export type AppointmentDocument = Appointment & Document;
export declare class Appointment {
    user: User;
    doctor: Doctor;
    hospitalName: string;
    appointmentDate: Date;
    appointmentTime: string;
    createdAt: Date;
}
export declare const AppointmentSchema: import("mongoose").Schema<Appointment, import("mongoose").Model<Appointment, any, any, any, Document<unknown, any, Appointment> & Appointment & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Appointment, Document<unknown, {}, import("mongoose").FlatRecord<Appointment>> & import("mongoose").FlatRecord<Appointment> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
