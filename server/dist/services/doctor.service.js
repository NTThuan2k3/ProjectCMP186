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
exports.DoctorService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const doctor_schema_1 = require("../schema/doctor.schema");
const hospital_service_1 = require("./hospital.service");
const fs = require("fs");
const path = require("path");
let DoctorService = class DoctorService {
    constructor(doctorModel, hospitalModel) {
        this.doctorModel = doctorModel;
        this.hospitalModel = hospitalModel;
        this.filePath = path.join(process.cwd(), 'data/doctors.json');
    }
    async loadDoctors() {
        const data = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));
        const doctorNamesFromJson = data.map((d) => d.name);
        await this.doctorModel.deleteMany({ name: { $nin: doctorNamesFromJson } });
        for (const doctorData of data) {
            const existingDoctor = await this.doctorModel.findOne({
                name: doctorData.name,
            });
            if (!existingDoctor) {
                const doctor = new this.doctorModel(doctorData);
                await doctor.save();
            }
            else if (existingDoctor.specialty !== doctorData.specialty ||
                existingDoctor.hospitalName !== doctorData.hospitalName) {
                await this.doctorModel.updateOne({ name: doctorData.name }, {
                    $set: {
                        specialty: doctorData.specialty,
                        hospitalName: doctorData.hospitalName,
                    },
                });
            }
        }
        return this.doctorModel.find();
    }
    async getDoctors() {
        return this.doctorModel.find().exec();
    }
    async findByDoctorname(name) {
        return this.doctorModel.findOne({ name }).exec();
    }
    async filterDoctors(hospitalName) {
        const hospital = await this.hospitalModel.findByName(hospitalName);
        if (!hospital) {
            return [];
        }
        return this.doctorModel.find({ hospitalName }).exec();
    }
    async getDoctorById(id) {
        const doctor = await this.doctorModel.findById(id).exec();
        if (!doctor) {
            throw new common_1.NotFoundException(`Doctor with ID ${id} not found`);
        }
        return doctor;
    }
    async updateDoctor(doctorId, updateData) {
        return this.doctorModel.findByIdAndUpdate(doctorId, updateData, { new: true }).select('_id __v password ');
    }
    async getDoctorProfile(doctorId) {
        return await this.doctorModel.findById(doctorId).select('-password -_id -__v');
    }
};
exports.DoctorService = DoctorService;
exports.DoctorService = DoctorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(doctor_schema_1.Doctor.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        hospital_service_1.HospitalService])
], DoctorService);
//# sourceMappingURL=doctor.service.js.map