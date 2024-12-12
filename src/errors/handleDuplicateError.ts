import { TErrorSource, TReturnErrorResponse } from "../interfaces/errors";

const handleDuplicateError = (err): TReturnErrorResponse => {

    const errorSources: TErrorSource = [
        {
            path: "",
            message: err?.errorResponse?.errmsg,
        }
    ]
    return {
        statusCode: 400,
        message: "Duplicate Error",
        errorSources,
    }
}

export default handleDuplicateError;