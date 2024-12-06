import { Request, Response } from 'express';
import { userServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';

const createUser = catchAsync(async (req: Request, res: Response) => {
    const userData = req.body;
    const result = await userServices.createUser(userData);

    sendResponse(res, {
        statusCode: StatusCodes.CREATED,
        message: 'User is Created successfully',
        success: true,
        data: result,
    });
});

const getAllUser = catchAsync(async (req: Request, res: Response) => {
    const result = await userServices.getAllUser();
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        message: 'Get Users successfully',
        success: true,
        data: result,
    });
});

const getSingleUser = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await userServices.getSingleUser(id);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        data: result,
        message: 'Get User successfully',
        success: true,
    });
});

const updateUser = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const body = req.body;
    const result = await userServices.updateUser(id, body);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        data: result,
        message: 'User updated successfully',
        success: true,
    });
});

const deleteUser = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await userServices.deleteUser(id);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        data: result,
        message: 'User deleted successfully',
        success: true,
    });
});

export const UserController = {
    createUser,
    getAllUser,
    getSingleUser,
    updateUser,
    deleteUser,
};
