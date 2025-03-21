import { Document } from 'mongoose';
export declare class Hospital extends Document {
    name: string;
    address: string;
    district: string;
    number: string;
    specialty: string;
}
export declare const HospitalSchema: import("mongoose").Schema<Hospital, import("mongoose").Model<Hospital, any, any, any, Document<unknown, any, Hospital> & Hospital & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Hospital, Document<unknown, {}, import("mongoose").FlatRecord<Hospital>> & import("mongoose").FlatRecord<Hospital> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
