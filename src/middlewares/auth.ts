import { NextFunction, Request, Response } from "express";
import { TUserRole } from "../modules/auth/auth.interface";
import catchAsync from "../utils/catchAsync";
import { JwtPayload, verify } from "jsonwebtoken";
import User from "../modules/user/user.model";

const auth = (...requiredRoles: TUserRole[]) => {
    return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const token = req.headers.authorization;
        if (!token) {
            throw new Error("You are not authorized ")
        }
        const decode = verify(token, 'secret') as JwtPayload;
        const user = await User.findOne({ email: decode.email });
        if (!user) {
            throw new Error("This user is not found!")
        }
        if (user?.userStatus == 'inactive') {
            throw new Error("This user is inactive!")
        }
        if (requiredRoles && !requiredRoles.includes(decode.role)) {
            throw new Error("You are not authorized vaiya");
        }

        req.user = decode;
        next();
    })
}

export default auth;