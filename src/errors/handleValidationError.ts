import mongoose from "mongoose";
import { TErrorSource, TReturnErrorResponse } from "../interfaces/errors";

const handleValidationError = (
    err: mongoose.Error.ValidationError
): TReturnErrorResponse => {
    const errorSources: TErrorSource = Object.values(err.errors).map(
        (val: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
            return {
                path: val?.path,
                message: val?.message,
            }
        }
    )

    return {
        statusCode: 400,
        message: "Validation Error",
        errorSources,
    }
}

export default handleValidationError;