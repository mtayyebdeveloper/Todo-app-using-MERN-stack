import express from "express";
import {
  HomeController,
  updateUserController,
  signupController,
  loginController,
  userdataController,
} from "../controllers/Auth.controller.js";
import { validate } from "../middlewares/zod.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
import { registerSchema, loginSchema } from "../validations/zod.validation.js";
import { JWTverificationMiddleware } from "../middlewares/jwt_verify.middleware.js";
const authRouter = express.Router();

authRouter.route("/").get(HomeController);
authRouter
  .route("/register")
  .post( upload.single("file"), signupController);
authRouter
  .route("/update")
  .patch(JWTverificationMiddleware,upload.single("file"), updateUserController);
authRouter.route("/login").post(validate(loginSchema), loginController);
authRouter.route("/user").get(JWTverificationMiddleware, userdataController);

export default authRouter;
