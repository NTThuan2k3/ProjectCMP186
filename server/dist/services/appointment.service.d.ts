import { Model } from 'mongoose';
import { Appointment, AppointmentDocument } from '../schema/appointment.schema';
import { UserDocument } from '../schema/user.schema';
import { DoctorDocument } from '../schema/doctor.schema';
import { CreateAppointmentDto } from 'src/dto/create-appoitment.dto';
export declare class AppointmentService {
    private appointmentModel;
    private userModel;
    private doctorModel;
    constructor(appointmentModel: Model<AppointmentDocument>, userModel: Model<UserDocument>, doctorModel: Model<DoctorDocument>);
    create(createAppointmentDto: CreateAppointmentDto): Promise<Appointment>;
    getAllAppointments(): Promise<Appointment[]>;
    getAppointmentsByUserId(userId: string): Promise<Appointment[]>;
    getAppointmentsByDoctorId(doctorId: string): Promise<Appointment[]>;
    getAppointmentById(appointmentId: string): Promise<Appointment>;
    cancelAppointment(appointmentId: string): Promise<any>;
    updateAppointment(appointmentId: string, updateData: Partial<CreateAppointmentDto>): Promise<any>;
    updateAppointmentStatus(appointmentId: string, status: boolean): Promise<Appointment>;
}
