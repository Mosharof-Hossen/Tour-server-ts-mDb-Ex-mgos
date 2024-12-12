import mongoose from "mongoose";
import { TErrorSource, TReturnErrorResponse } from "../interfaces/errors";

const handleCastError = (
    err: mongoose.Error.CastError
): TReturnErrorResponse => {
    const errorSources: TErrorSource = [
        {
            path: err?.path,
            message: err?.message
        }
    ]

    return {
        statusCode: 400,
        message: "Validation Error",
        errorSources,
    }
}

export default handleCastError;