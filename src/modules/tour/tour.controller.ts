import { Request, Response } from 'express';
import { tourServices } from './tour.service';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';

const createTour = catchAsync(async (req: Request, res: Response) => {
    const payload = req.body;
    const result = await tourServices.createTour(payload);

    sendResponse(res, {
        statusCode: StatusCodes.CREATED,
        data: result,
        message: 'Tour Created successfully',
        success: true,
    });
});

const getAllTour = catchAsync(async (req: Request, res: Response) => {
    const result = await tourServices.getAllTour();

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        data: result,
        message: 'All Tour successfully loaded',
        success: true,
    });
});

const getSingleTour = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await tourServices.getSingleTour(id);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        data: result,
        message: 'Single Tour successfully loaded',
        success: true,
    });
});

const updateTour = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const payload = req.body;
    const result = await tourServices.updateTour(id, payload);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        data: result,
        message: 'Tour successfully updated',
        success: true,
    });
});

const deleteTour = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await tourServices.deleteTour(id);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        data: result,
        message: 'successfully deleted',
        success: true,
    });
});

export const tourController = {
    createTour,
    getAllTour,
    getSingleTour,
    updateTour,
    deleteTour,
};
