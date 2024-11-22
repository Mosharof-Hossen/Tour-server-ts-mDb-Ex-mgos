import { Request, Response } from 'express';
import { userServices } from './user.service';

const createUser = async (req: Request, res: Response) => {
    try {
        const userData = req.body;
        const result = await userServices.createUser(userData);

        res.status(200).json({
            success: true,
            message: 'User is Created successfully',
            data: result,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || 'Something went wrong',
            error: err,
        });
    }
};
const getAllUser = async (req: Request, res: Response) => {
    try {
        const result = await userServices.getAllUser();

        res.status(200).json({
            success: true,
            message: 'Get Users successfully',
            data: result,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || 'Something went wrong',
            error: err,
        });
    }
};
const getSingleUser = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const result = await userServices.getSingleUser(id);

        res.status(200).json({
            success: true,
            message: 'Get Users successfully',
            data: result,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || 'Something went wrong',
            error: err,
        });
    }
};
const updateUser = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const result = await userServices.updateUser(id, body);

        res.status(200).json({
            success: true,
            message: 'User updated successfully',
            data: result,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || 'Something went wrong',
            error: err,
        });
    }
};
const deleteUser = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const result = await userServices.deleteUser(id);

        res.status(200).json({
            success: true,
            message: 'User deleted successfully',
            data: result,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || 'Something went wrong',
            error: err,
        });
    }
};

export const UserController = {
    createUser,
    getAllUser,
    getSingleUser,
    updateUser,
    deleteUser
};
