import { AppointmentService } from '../services/appointment.service';
import { CreateAppointmentDto } from 'src/dto/create-appoitment.dto';
export declare class AppointmentController {
    private readonly appointmentService;
    constructor(appointmentService: AppointmentService);
    getAllAppointments(): Promise<import("../schema/appointment.schema").Appointment[]>;
    getAppointmentsByUserId(userId: string): Promise<import("../schema/appointment.schema").Appointment[]>;
    getAppointmentsByDoctorId(doctorId: string): Promise<import("../schema/appointment.schema").Appointment[]>;
    getAppointmentById(appointmentId: string): Promise<import("../schema/appointment.schema").Appointment>;
    create(createAppointmentDto: CreateAppointmentDto): Promise<import("../schema/appointment.schema").Appointment>;
    cancelAppointment(appointmentId: string): Promise<any>;
    updateAppointment(appointmentId: string, updateAppointmentDto: Partial<CreateAppointmentDto>): Promise<any>;
}
