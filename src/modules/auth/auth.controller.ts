import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AuthServices } from "./auth.services";

const loginUser = catchAsync(async (req, res) => {
    const result = await AuthServices.login(req.body);
    console.log(result);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "User is logged in successfully.",
        data: result
    })
})

export const authControllers = {
    loginUser,
}