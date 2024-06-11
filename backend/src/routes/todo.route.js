import express from "express";
import {
  FormController,
  UpdateTodoController,
  DeleteTodoController,
  TodoDataController,
  getTodoController,
} from "../controllers/Todo.controller.js";
import { JWTverificationMiddleware } from "../middlewares/jwt_verify.middleware.js";
import { validate } from "../middlewares/zod.middleware.js";
import { todoSchema } from "../validations/zod.validation.js";
const TodoRouter = express.Router();

TodoRouter.route("/alltodos").get(
  JWTverificationMiddleware,
  TodoDataController
);
TodoRouter.route("/create").post(JWTverificationMiddleware,validate(todoSchema), FormController);
TodoRouter.route("/update/:id").patch(
  JWTverificationMiddleware,
  validate(todoSchema),
  UpdateTodoController
);
TodoRouter.route("/delete/:id").delete(
  JWTverificationMiddleware,
  DeleteTodoController
);
TodoRouter.route("/todo/:id").get(JWTverificationMiddleware, getTodoController);

export default TodoRouter;
