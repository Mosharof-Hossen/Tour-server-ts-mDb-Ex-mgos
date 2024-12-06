import mongoose from 'mongoose';
import Tour from '../tour/tour.model';
import { TBooking } from './booking.interface';
import { Booking } from './booking.model';

const createBooking = async (payload: TBooking): Promise<TBooking> => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const { tour, bookedSlots } = payload;

        const tourResult = await Tour.findById(tour);
        if (!tourResult) {
            throw new Error('Tour not found.');
        }

        const totalPrice = tourResult.price * bookedSlots;
        payload.totalPrice = totalPrice;

        if (tourResult.availableSeats < bookedSlots) {
            throw new Error('Not enough seats available.');
        }

        const booking = await Booking.create([payload], { session });

        const updatedTour = await Tour.findByIdAndUpdate(
            tour,
            { $inc: { availableSeats: -bookedSlots } },
            { new: true, session }
        );

        if (!updatedTour) {
            throw new Error('Failed to update tour');
        }

        await session.commitTransaction();
        await session.endSession();
        return booking[0];
    } catch (err) {
        await session.abortTransaction();
        await session.endSession();
        throw err;
    }
};

export const bookingServices = {
    createBooking,
};
