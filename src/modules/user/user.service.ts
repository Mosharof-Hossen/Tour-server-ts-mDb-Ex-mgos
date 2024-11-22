import { TUser } from './user.interface';
import User from './user.model';

const createUser = async (userData: TUser): Promise<TUser> => {
    const result = await User.create(userData);
    return result;
};
const getAllUser = async () => {
    const result = await User.find({});
    return result;
};
const getSingleUser = async (_id: string) => {
    const result = await User.findOne({ _id });
    return result;
};
const updateUser = async (_id: string, data: TUser) => {
    const result = await User.findByIdAndUpdate(_id, data, { new: true });
    return result;
};
const deleteUser = async (_id: string) => {
    const result = await User.findByIdAndDelete(_id);
    return result;
};

export const userServices = {
    createUser,
    getAllUser,
    getSingleUser,
    updateUser,
    deleteUser,
};
