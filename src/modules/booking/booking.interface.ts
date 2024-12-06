import { Types } from 'mongoose';

export type TBooking = {
    user: Types.ObjectId;
    tour: Types.ObjectId;
    bookedSlots: number;
    bookingStatus: 'pending' | 'paid' | 'canceled';
    totalPrice: number;
};
