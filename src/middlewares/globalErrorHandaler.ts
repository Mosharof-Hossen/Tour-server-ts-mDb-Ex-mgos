/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import config from '../config';
import { TErrorSource } from '../interfaces/errors';
import { ZodError } from 'zod';
import handleZodError from '../errors/handleZodError';

const globalErrorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || 'Something went wrong';

    let errorSources: TErrorSource = [
        {
            path: "",
            message: "Something went wrong"
        }
    ]

    if (err instanceof ZodError) {
        const simplifiedError = handleZodError(err);
        errorSources = simplifiedError?.errorSources;
        message = simplifiedError?.message;
        statusCode = simplifiedError?.statusCode;
    }

    return res.status(statusCode).json({
        success: false,
        message: message,
        errorSources,
        stack: config.node_env === "development" ? err?.stack : null,
        // err,
    });
};

export default globalErrorHandler;
