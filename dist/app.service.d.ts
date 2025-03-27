export declare class AppService {
    private readonly filePath;
    private readonly OTP_EXPIRY_TIME;
    generateOtp(userId: string): {
        message: string;
        otp: string;
        timestamp: number;
    };
    private saveToFile;
    verifyOtp(userId: string): {
        message: string;
        otp?: undefined;
        timestamp?: undefined;
    } | {
        message: string;
        otp: string;
        timestamp: number;
    };
}
