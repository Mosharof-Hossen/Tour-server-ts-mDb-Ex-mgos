import User from "../user/user.model"
import { TLogin } from "./auth.interface";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const login = async (payload: TLogin) => {
    console.log(payload);
    const user = await User.findOne({ email: payload?.email });
    if (!user) {
        throw new Error("This user is not found!")
    }
    if (user.userStatus == 'inactive') {
        throw new Error("This user is inactive")
    }
    const isPasswordMatched = await bcrypt.compare(payload?.password, user?.password);
    if (!isPasswordMatched) {
        throw new Error("Wrong password")
    }
    const jwtPayload = {
        email: user.email,
        role: user.role
    }

    const accessToken = jwt.sign(jwtPayload, "secret", { expiresIn: "30d" });

    return { accessToken, user };
}


export const AuthServices = {
    login
}