import { TUser } from "../user/user.interface"
import User from "../user/user.model"

const login = async (payload: Partial<TUser>) => {
    const result = await User.findOne({ email: payload?.email });
    return result
}


export const AuthServices = {
    login
}