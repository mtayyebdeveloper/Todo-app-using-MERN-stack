import { z } from "zod";

const registerSchema = z.object({
  fullName: z
    .string()
    .min(3, "Full Name must be at least 3 characters long")
    .max(100, "Full Name must be at most 100 characters long"),
  username: z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .max(100, "Username must be at most 100 characters long")
    .toLowerCase(),
  email: z.string().email(),
  avatar: z.string(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(100, "Password must be at most 100 characters long"),
});

const loginSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .max(100, "Username must be at most 100 characters long")
    .toLowerCase(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(100, "Password must be at most 100 characters long"),
});

const todoSchema = z.object({
  workspaceName: z
    .string()
    .min(3, "Workspace Name must be at least 3 characters long")
    .max(150, "Workspace Name must be at most 150 characters long"),
  username: z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .max(100, "Username must be at most 100 characters long"),
  email: z.string().email(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(100, "Password must be at most 100 characters long"),
  massage: z
    .string()
    .min(3, "Massage must be at least 3 characters long")
    .max(100, "Massage must be at most 100 characters long")
    .default("No Message"),
});

const contactSchema = z.object({
  fullName: z
    .string()
    .min(3, "Full Name must be at least 3 characters long")
    .max(100, "Full Name must be at most 100 characters long"),
  email: z.string().email(),
  message: z
    .string()
    .min(3, "Massage must be at least 3 characters long")
    .max(200, "Massage must be at most 200 characters long")
    .default("No Message"),
});

export { registerSchema,loginSchema,todoSchema,contactSchema };
