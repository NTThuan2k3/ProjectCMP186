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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const user_schema_1 = require("../schema/user.schema");
const doctor_schema_1 = require("../schema/doctor.schema");
let AuthService = class AuthService {
    constructor(userModel, doctorModel, jwtService) {
        this.userModel = userModel;
        this.doctorModel = doctorModel;
        this.jwtService = jwtService;
    }
    async register(username, password) {
        const user = await this.userModel.findOne({ username });
        console.log(user);
        if (user == null) {
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new this.userModel({
                username,
                password: hashedPassword,
            });
            return newUser.save();
        }
        else
            throw new Error('User existed');
    }
    async login(username, password, role) {
        let user;
        if (role === 'user') {
            user = await this.userModel.findOne({ username });
            if (!user) {
                throw new Error('User not found');
            }
        }
        else if (role === 'doctor') {
            let name = username;
            user = await this.doctorModel.findOne({ name });
            if (!user) {
                throw new Error('Doctor not found');
            }
        }
        else {
            throw new Error('Invalid role');
        }
        console.log('Found user:', user);
        if (user && (await bcrypt.compare(password, user.password))) {
            const accessToken = this.generateAccessToken(user);
            return {
                access_token: accessToken,
            };
            console.log('Access token: ', accessToken);
        }
        else
            throw new Error('Invalid credentials');
    }
    async loginWithGoogle(username, email) {
        let user = await this.userModel.findOne({ email });
        if (!user) {
            const hashedPassword = await bcrypt.hash(email, 10);
            user = new this.userModel({
                username: username,
                password: hashedPassword,
                email: email,
                authProvider: 'google',
            });
            await user.save();
        }
        const accessToken = this.generateAccessToken(user);
        return {
            access_token: accessToken,
        };
    }
    generateAccessToken(user) {
        const payload = { username: 'username' in user ? user.username : user.name, role: user.role };
        return this.jwtService.sign(payload, { secret: process.env.SECRETKEY, expiresIn: '30m' });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __param(1, (0, mongoose_1.InjectModel)(doctor_schema_1.Doctor.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map