import { Response } from 'express';
import { AppService } from './app.service';
export declare class OtpController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(res: Response): Response<any, Record<string, any>>;
    generateOtp(userId: string, res: Response): Response<any, Record<string, any>>;
    verifyOtp(res: Response, userId: string, otp: string): Response<any, Record<string, any>>;
}
