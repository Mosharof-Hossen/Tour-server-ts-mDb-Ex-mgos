import { model, Schema } from 'mongoose';
import { TTour } from './tour.interface';

const tourSchema = new Schema<TTour>({
    name: {
        type: String,
        required: true,
    },
    durationHours: {
        type: Number,
        required: true,
    },
    averageRating: {
        type: Number,
        default: 5,
    },
    price: {
        type: Number,
        required: true,
    },
    coverImage: {
        type: String,
        required: true,
    },
    images: [String],
    startDate: { type: Date },
    startLocation: String,
    locations: [String],
    slug: String,
    availableSeats: { type: Number, required: true },
});

const Tour = model<TTour>('Tour', tourSchema);
export default Tour;
