import { Injectable } from "@nestjs/common";
import * as winston from "winston"

@Injectable()
export class LoggerService {
    private logger: winston.Logger;

    constructor() {
        this.logger = winston.createLogger({
            level: "info",
            format: winston.format.json(),
            transports: [
                new winston.transports.Console(),
                new winston.transports.File({ filename: "error.log", level: "error" }),
                new winston.transports.File({ filename: "combined.log", level: "info" })
            ]
        })
    }

    log(message: string, context?: string) {
        this.logger.log("info", message, { context })
    }

    error(message: string, trace: string, context?: string) {
        this.logger.error(message, { trace, context })
    }

    warn(message: string, context?: string) {
        this.logger.warn(message, { context })
    }

    debug(message: string, context?: string) {
        this.logger.debug(message, { context })
    }
}