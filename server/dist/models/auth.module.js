"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("../schema/user.schema");
const user_service_1 = require("../services/user.service");
const jwt_strategy_1 = require("../configuration/jwt.strategy");
const auth_service_1 = require("../services/auth.service");
const auth_controller_1 = require("../controller/auth.controller");
const doctor_schema_1 = require("../schema/doctor.schema");
const doctor_service_1 = require("../services/doctor.service");
const hospital_module_1 = require("./hospital.module");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: user_schema_1.User.name, schema: user_schema_1.UserSchema }, { name: doctor_schema_1.Doctor.name, schema: doctor_schema_1.DoctorSchema },]),
            hospital_module_1.HospitalModule,
            jwt_1.JwtModule.register({
                secret: process.env.SECRETKEY,
                signOptions: { expiresIn: '30m' },
            }),
        ],
        providers: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy, user_service_1.UserService, doctor_service_1.DoctorService],
        controllers: [auth_controller_1.AuthController],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map