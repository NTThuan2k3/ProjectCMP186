"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const appointment_schema_1 = require("../schema/appointment.schema");
const user_schema_1 = require("../schema/user.schema");
const doctor_schema_1 = require("../schema/doctor.schema");
let AppointmentService = class AppointmentService {
    constructor(appointmentModel, userModel, doctorModel) {
        this.appointmentModel = appointmentModel;
        this.userModel = userModel;
        this.doctorModel = doctorModel;
    }
    async create(createAppointmentDto) {
        const createdAppointment = new this.appointmentModel(createAppointmentDto);
        return createdAppointment.save();
    }
    async getAllAppointments() {
        return this.appointmentModel.find().populate('user doctor').exec();
    }
    async getAppointmentsByUserId(userId) {
        return this.appointmentModel
            .find({ user: userId })
            .populate('user doctor')
            .exec();
    }
    async getAppointmentsByDoctorId(doctorId) {
        return this.appointmentModel
            .find({ doctor: doctorId })
            .populate('user doctor')
            .exec();
    }
    async getAppointmentById(appointmentId) {
        return this.appointmentModel
            .findById(appointmentId)
            .populate('user doctor')
            .exec();
    }
    async cancelAppointment(appointmentId) {
        const appointment = await this.appointmentModel.findById(appointmentId);
        if (!appointment) {
            throw new Error('Appointment not found');
        }
        await appointment.deleteOne();
        return { message: 'Appointment cancelled successfully' };
    }
    async updateAppointment(appointmentId, updateData) {
        const appointment = await this.appointmentModel.findByIdAndUpdate(appointmentId, updateData, { new: true });
        if (!appointment) {
            throw new Error('Appointment not found');
        }
        return appointment;
    }
};
exports.AppointmentService = AppointmentService;
exports.AppointmentService = AppointmentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(appointment_schema_1.Appointment.name)),
    __param(1, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __param(2, (0, mongoose_1.InjectModel)(doctor_schema_1.Doctor.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], AppointmentService);
//# sourceMappingURL=appointment.service.js.map