/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import config from '../config';
import { TErrorSource } from '../interfaces/errors';

const globalErrorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Something went wrong';

    let errorSources: TErrorSource = [
        {
            path: "",
            message: "Something went wrong"
        }
    ]


    return res.status(statusCode).json({
        success: false,
        message: message,
        errorSources,
        stack: config.node_env === "development" ? err?.stack : null,
        err,
    });
};

export default globalErrorHandler;
