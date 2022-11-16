import { createLogger, transports, format } from "winston";
import * as dotenv from 'dotenv';
import DailyRotateFile from 'winston-daily-rotate-file';

dotenv.config()

const fileName: string = process.env.LOGS_FOLDER + "logs";

let transportDaily = new DailyRotateFile({
    filename: fileName,
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
    level: 'info'
});

let logTransports = process.env.PRODUCTION ?
    [transportDaily] : [new transports.Console()];



export const logger = createLogger({
    transports: logTransports,
    format: format.combine(
        format.colorize(),
        format.timestamp(),
        format.printf(({ timestamp, level, message }) => {
            return `[${timestamp}] ${level}: ${message}`;
        })
    ),
});