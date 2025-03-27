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
exports.OtpController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let OtpController = class OtpController {
    appService;
    constructor(appService) {
        this.appService = appService;
    }
    getHello(res) {
        try {
            return res.status(common_1.HttpStatus.OK).send('Hello, World!');
        }
        catch (error) {
            return res
                .status(common_1.HttpStatus.INTERNAL_SERVER_ERROR)
                .send(`An error occurred${error}`);
        }
    }
    generateOtp(userId, res) {
        if (!userId) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({ message: 'User ID is required' });
        }
        const result = this.appService.generateOtp(userId);
        return res.status(common_1.HttpStatus.CREATED).json(result);
    }
    verifyOtp(res, userId, otp) {
        if (userId === undefined || userId === null) {
            return res
                .status(common_1.HttpStatus.BAD_REQUEST)
                .send(`required filed userId is missing`);
        }
        if (!userId) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({ message: 'User ID is required' });
        }
        if (!otp) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({ message: 'OTP is required' });
        }
        const result = this.appService.verifyOtp(userId);
        return res.status(common_1.HttpStatus.OK).json(result);
    }
};
exports.OtpController = OtpController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OtpController.prototype, "getHello", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)('userId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], OtpController.prototype, "generateOtp", null);
__decorate([
    (0, common_1.Post)('verify-otp'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)('userId')),
    __param(2, (0, common_1.Body)('otp')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], OtpController.prototype, "verifyOtp", null);
exports.OtpController = OtpController = __decorate([
    (0, common_1.Controller)('otp'),
    __metadata("design:paramtypes", [app_service_1.AppService])
], OtpController);
//# sourceMappingURL=otp.controller.js.map