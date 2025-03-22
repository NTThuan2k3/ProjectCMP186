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
exports.JwtStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_jwt_1 = require("passport-jwt");
const passport_1 = require("@nestjs/passport");
const user_service_1 = require("../services/user.service");
const doctor_service_1 = require("../services/doctor.service");
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(usersService, doctorService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.SECRETKEY,
        });
        this.usersService = usersService;
        this.doctorService = doctorService;
    }
    async validate(payload) {
        const { username, role } = payload;
        if (role === 'user') {
            const user = await this.usersService.findByUsername(username);
            if (!user) {
                throw new Error('User not found');
            }
            return user;
        }
        else if (role === 'doctor') {
            let name = username;
            const doctor = await this.doctorService.findByDoctorname(name);
            if (!doctor) {
                throw new Error('Doctor not found');
            }
            return doctor;
        }
        else {
            throw new Error('Invalid role');
        }
    }
};
exports.JwtStrategy = JwtStrategy;
exports.JwtStrategy = JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService, doctor_service_1.DoctorService])
], JwtStrategy);
//# sourceMappingURL=jwt.strategy.js.map