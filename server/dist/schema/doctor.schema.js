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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorSchema = exports.Doctor = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const bcrypt = require("bcrypt");
let Doctor = class Doctor {
};
exports.Doctor = Doctor;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Doctor.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Doctor.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Doctor.prototype, "specialty", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Doctor.prototype, "hospitalName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: "6:00" }),
    __metadata("design:type", String)
], Doctor.prototype, "startTime", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: "18:00" }),
    __metadata("design:type", String)
], Doctor.prototype, "endTime", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: ['Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy', 'Chủ Nhật',] }),
    __metadata("design:type", Array)
], Doctor.prototype, "workingDays", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: 'doctor' }),
    __metadata("design:type", String)
], Doctor.prototype, "role", void 0);
exports.Doctor = Doctor = __decorate([
    (0, mongoose_1.Schema)()
], Doctor);
exports.DoctorSchema = mongoose_1.SchemaFactory.createForClass(Doctor);
exports.DoctorSchema.pre('save', async function (next) {
    const doctor = this;
    if (!doctor.password) {
        doctor.password = await bcrypt.hash(doctor.name, 10);
    }
    next();
});
//# sourceMappingURL=doctor.schema.js.map