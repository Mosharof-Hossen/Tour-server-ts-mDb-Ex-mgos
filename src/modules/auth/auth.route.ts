import { Router } from "express";
import { authControllers } from "./auth.controller";
import dataValidator from "../../middlewares/dataValidator";
import { AuthValidation } from "./auth.validation";

const router = Router();

router.post("/login", dataValidator(AuthValidation.authValidationSchema), authControllers.loginUser)


export const AuthRoute = router;