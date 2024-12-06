import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { bookingServices } from './booking.services';

const createBooking = catchAsync(async (req, res) => {
    const result = await bookingServices.createBooking(req.body);
    sendResponse(res, {
        data: result,
        message: 'Booking successfully done',
        statusCode: StatusCodes.CREATED,
        success: true,
    });
});

export const bookingsControllers = {
    createBooking,
};
