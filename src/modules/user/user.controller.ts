import { NextFunction, Request, Response } from 'express';
import { userServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import {
    StatusCodes,
} from 'http-status-codes';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userData = req.body;
        const result = await userServices.createUser(userData);

        sendResponse(res, {
            statusCode: StatusCodes.CREATED,
            message: 'User is Created successfully',
            success: true,
            data: result
        })

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
        next(err);
    }
};

const getAllUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await userServices.getAllUser();
        sendResponse(res, {
            statusCode: StatusCodes.OK,
            message: 'Get Users successfully',
            success: true,
            data: result
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
        next(err)
    }
};

const getSingleUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const result = await userServices.getSingleUser(id);

        sendResponse(res, {
            statusCode: StatusCodes.OK,
            data: result,
            message: 'Get User successfully',
            success: true
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
        next(err)
    }
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const result = await userServices.updateUser(id, body);

        sendResponse(res, {
            statusCode: StatusCodes.OK,
            data: result,
            message: 'User updated successfully',
            success: true
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
        next(err)
    }
};

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const result = await userServices.deleteUser(id);

        sendResponse(res, {
            statusCode: StatusCodes.OK,
            data: result,
            message: 'User deleted successfully',
            success: true
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
        next(err)
    }
};

export const UserController = {
    createUser,
    getAllUser,
    getSingleUser,
    updateUser,
    deleteUser,
};
