import { NextFunction, Request, Response } from 'express';
import { tourServices } from './tour.service';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';

const createTour = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const payload = req.body;
        const result = await tourServices.createTour(payload);

        sendResponse(res, {
            statusCode: StatusCodes.CREATED,
            data: result,
            message: 'Tour Created successfully',
            success: true
        })

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
        next(err)
    }
};

const getAllTour = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await tourServices.getAllTour()

        sendResponse(res, {
            statusCode: StatusCodes.OK,
            data: result,
            message: 'All Tour successfully loaded',
            success: true
        })

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
        next(err)
    }
};

const getSingleTour = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id
        const result = await tourServices.getSingleTour(id)

        sendResponse(res, {
            statusCode: StatusCodes.OK,
            data: result,
            message: 'Single Tour successfully loaded',
            success: true
        })

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
        next(err)
    }
};

const updateTour = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id
        const payload = req.body;
        const result = await tourServices.updateTour(id, payload)

        sendResponse(res, {
            statusCode: StatusCodes.OK,
            data: result,
            message: 'Tour successfully updated',
            success: true
        })

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
        next(err)
    }
};

const deleteTour = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id
        const result = await tourServices.deleteTour(id)

        sendResponse(res, {
            statusCode: StatusCodes.OK,
            data: result,
            message: 'successfully deleted',
            success: true
        })

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
        next(err)
    }
};



export const tourController = {
    createTour,
    getAllTour,
    getSingleTour,
    updateTour,
    deleteTour
}