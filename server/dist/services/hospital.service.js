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
exports.HospitalService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const hospital_schema_1 = require("../schema/hospital.schema");
const fs = require("fs");
const path = require("path");
let HospitalService = class HospitalService {
    constructor(hospitalModel) {
        this.hospitalModel = hospitalModel;
        this.filePath = path.join(process.cwd(), 'data/hospitals.json');
    }
    async loadHospitals() {
        const data = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));
        const hospitalNamesFromJson = data.map((h) => h.name);
        await this.hospitalModel.deleteMany({ name: { $nin: hospitalNamesFromJson } });
        for (const hospitalData of data) {
            const existingHospital = await this.hospitalModel.findOne({ name: hospitalData.name });
            if (!existingHospital) {
                const hospital = new this.hospitalModel(hospitalData);
                await hospital.save();
            }
            else if (existingHospital.address !== hospitalData.address ||
                existingHospital.district !== hospitalData.district) {
                await this.hospitalModel.updateOne({ name: hospitalData.name }, { $set: { address: hospitalData.address, district: hospitalData.district, number: hospitalData.number, specialty: hospitalData.specialty } });
            }
        }
        return this.hospitalModel.find();
    }
    async getHospitals() {
        return this.hospitalModel.find().exec();
    }
    async findByDistrict(district) {
        return this.hospitalModel.find({ district }).exec();
    }
    async findByName(hospitalName) {
        return this.hospitalModel.findOne({ name: hospitalName }).exec();
    }
};
exports.HospitalService = HospitalService;
exports.HospitalService = HospitalService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(hospital_schema_1.Hospital.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], HospitalService);
//# sourceMappingURL=hospital.service.js.map