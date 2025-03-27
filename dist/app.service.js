"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const path = require("path");
let AppService = class AppService {
    filePath = path.join(process.cwd(), 'src', 'otp.json');
    OTP_EXPIRY_TIME = 10 * 60 * 1000;
    generateOtp(userId) {
        console.log(userId, "1234567");
        const otp = Math.floor(1000 + Math.random() * 9000).toString();
        const timestamp = Date.now();
        const otpEntry = { userId, otp, timestamp };
        this.saveToFile(otpEntry);
        return { message: 'OTP generated successfully', otp, timestamp };
    }
    saveToFile(otpEntry) {
        let otpData = [];
        if (fs.existsSync(this.filePath)) {
            const fileContent = fs.readFileSync(this.filePath, 'utf-8');
            otpData = fileContent ? JSON.parse(fileContent) : [];
        }
        otpData.push(otpEntry);
        fs.writeFileSync(this.filePath, JSON.stringify(otpData, null, 2));
    }
    verifyOtp(userId) {
        if (!fs.existsSync(this.filePath)) {
            return { message: 'Invalid OTP' };
        }
        const fileContent = fs.readFileSync(this.filePath, 'utf-8');
        const otpData = JSON.parse(fileContent);
        const userOtp = otpData.find(entry => entry.userId === userId);
        if (!userOtp) {
            return { message: 'Invalid OTP' };
        }
        const currentTime = Date.now();
        const timeDiff = currentTime - userOtp.timestamp;
        if (timeDiff > this.OTP_EXPIRY_TIME) {
            return { message: 'OTP Expired' };
        }
        return { message: 'OTP Verified', otp: userOtp.otp, timestamp: userOtp.timestamp };
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map