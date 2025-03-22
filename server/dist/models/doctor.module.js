"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const doctor_schema_1 = require("../schema/doctor.schema");
const doctor_service_1 = require("../services/doctor.service");
const doctor_controller_1 = require("../controller/doctor.controller");
const hospital_module_1 = require("./hospital.module");
let DoctorModule = class DoctorModule {
};
exports.DoctorModule = DoctorModule;
exports.DoctorModule = DoctorModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: doctor_schema_1.Doctor.name, schema: doctor_schema_1.DoctorSchema }]),
            hospital_module_1.HospitalModule,],
        controllers: [doctor_controller_1.DoctorController],
        providers: [doctor_service_1.DoctorService],
    })
], DoctorModule);
//# sourceMappingURL=doctor.module.js.map