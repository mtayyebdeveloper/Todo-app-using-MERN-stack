import express from "express";
import { ContactController } from "../controllers/Contact.controller.js";
import { JWTverificationMiddleware } from "../middlewares/jwt_verify.middleware.js";
import { validate } from "../middlewares/zod.middleware.js";
import { contactSchema } from "../validations/zod.validation.js";

const contactRouter = express.Router();

contactRouter
  .route("/contact")
  .post(JWTverificationMiddleware, validate(contactSchema), ContactController);

export default contactRouter;
