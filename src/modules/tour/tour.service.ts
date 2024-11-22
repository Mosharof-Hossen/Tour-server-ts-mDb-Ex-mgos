import { TTour } from './tour.interface';
import Tour from './tour.model';

const createTour = async (payload: TTour) => {
    const result = await Tour.create(payload);
    return result;
};
const getAllTour = async () => {
    const result = await Tour.find();
    return result;
};
const getSingleTour = async (id: string) => {
    const result = await Tour.findById(id);
    return result;
};
const updateTour = async (id: string, payload: Partial<TTour>) => {
    const result = await Tour.findByIdAndUpdate(id, payload,{new:true});
    return result;
};

const deleteTour = async (id: string) => {
    const result = await Tour.findByIdAndDelete(id);
    return result;
};

export const tourServices = {
    createTour,
    getAllTour,
    getSingleTour,
    updateTour,
    deleteTour,
};
