import { z } from "zod";

const createUserValidationSchema = z.object({
    body: z.object({
        name: z
            .string()
            .nonempty("Name is required"),
        age: z
            .number()
            .int("Age must be an integer")
            .nonnegative("Age cannot be negative")
            .min(1, "Age must be at least 1"),
        email: z
            .string()
            .email("Invalid email address")
            .nonempty("Email is required"),
        photo: z.string().optional(),
        role: z
            .enum(["user", "admin"]),
        userStatus: z
            .enum(["active", "inactive"]),
    })
});

export const userValidation = {
    createUserValidationSchema
}
