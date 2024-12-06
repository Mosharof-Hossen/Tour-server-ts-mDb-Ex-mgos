import { model, Schema } from 'mongoose';
import { TBooking } from './booking.interface';

const bookingSchema = new Schema<TBooking>(
    {
        user: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        tour: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        bookedSlots: {
            type: Number,
            required: true,
        },
        bookingStatus: {
            type: String,
            enum: ['pending', 'paid', 'canceled'],
            default: 'pending',
        },
        totalPrice: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);

export const Booking = model<TBooking>('Booking', bookingSchema);
