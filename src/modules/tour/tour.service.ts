import { TTour } from './tour.interface';
import Tour from './tour.model';

const createTour = async (payload: TTour) => {
    const result = await Tour.create(payload);
    return result;
};





const getAllTour = async (query: Record<string, unknown>) => {

    const searchTerm = query?.searchTerm || "";
    const searchAbleFields = ['startLocation', 'locations', 'name', 'slug'];

    const searchQuery = Tour.find({
        $or: searchAbleFields.map((field) => ({
            [field]: { $regex: searchTerm, $options: 'i' }
        }))
    });

    const queryObj = { ...query };
    const excludeFields = ['searchTerm', 'limit', 'page'];
    excludeFields.forEach((el) => delete queryObj[el]);
    const filterQuery = searchQuery.find(queryObj)

    // pagination
    console.log(query, queryObj);
    const page = Number(query?.page) || 1;
    const limit = Number(query?.limit) || 10;
    const skip = (page - 1) * limit
    const result = await filterQuery.find().skip(skip).limit(limit);

    return result;
};






const getSingleTour = async (id: string) => {
    const result = await Tour.findById(id);
    return result;
};
const updateTour = async (id: string, payload: Partial<TTour>) => {
    const result = await Tour.findByIdAndUpdate(id, payload, { new: true });
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
