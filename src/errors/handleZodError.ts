import { ZodError, ZodIssue } from "zod";
import { TErrorSource, TReturnErrorResponse } from "../interfaces/errors";

const handleZodError = (err: ZodError): TReturnErrorResponse => {

    const errorSources: TErrorSource = err.issues.map((issue: ZodIssue) => {
        return {
            path: issue?.path[issue?.path.length - 1],
            message: issue?.message,
        }
    })

    return {
        statusCode: 400,
        message: "Validation Error",
        errorSources,
    }
}

export default handleZodError;