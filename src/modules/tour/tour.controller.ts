import { Request, Response } from 'express';
import { tourServices } from './tour.service';

const createTour = async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        const result = await tourServices.createTour(payload);

        res.status(200).json({
            success: true,
            message: 'Tour Created successfully',
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
const getAllTour = async (req: Request, res: Response) => {
    try {
        const result = await tourServices.getAllTour()

        res.status(200).json({
            success: true,
            message: 'All Tour successfully loaded',
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
const getSingleTour = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const result = await tourServices.getSingleTour(id)

        res.status(200).json({
            success: true,
            message: 'Single Tour successfully loaded',
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
const updateTour = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const payload = req.body;
        const result = await tourServices.updateTour(id,payload)

        res.status(200).json({
            success: true,
            message: 'Tour successfully updated',
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
const deleteTour = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const result = await tourServices.deleteTour(id)

        res.status(200).json({
            success: true,
            message: 'successfully deleted',
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



export const tourController = {
    createTour,
    getAllTour,
    getSingleTour,
    updateTour,
    deleteTour
}