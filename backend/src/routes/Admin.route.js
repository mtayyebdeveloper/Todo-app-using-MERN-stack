import { AdminVerification } from "../middlewares/admin.middleware.js";
import { JWTverificationMiddleware } from "../middlewares/jwt_verify.middleware.js";
import {
  GetAllTodosController,
  GetAllUsersController,
  DeleteTodosController,
  DeleteUsersController,
  UpdateTodosController,
  UpdateUsersController,
  deltecontactController,
  GetAllContactsController,
} from "../controllers/Admin.controller.js";
import express from "express";

const AdminRouter = express.Router();

AdminRouter.route("/alltodos").get(
  JWTverificationMiddleware,
  AdminVerification,
  GetAllTodosController
);
AdminRouter.route("/allcontacts").get(
  JWTverificationMiddleware,
  AdminVerification,
  GetAllContactsController
);
AdminRouter.route("/deletecontact/:id").delete(
  JWTverificationMiddleware,
  AdminVerification,
  deltecontactController
);
AdminRouter.route("/allusers").get(
  JWTverificationMiddleware,
  AdminVerification,
  GetAllUsersController
);
AdminRouter.route("/deleteuser/:id").delete(
  JWTverificationMiddleware,
  AdminVerification,
  DeleteUsersController
);
AdminRouter.route("/updateuser/:id").patch(
  JWTverificationMiddleware,
  AdminVerification,
  UpdateUsersController
);
AdminRouter.route("/updatetodo/:id").patch(
  JWTverificationMiddleware,
  AdminVerification,
  UpdateTodosController
);
AdminRouter.route("/deletetodo/:id").delete(
  JWTverificationMiddleware,
  AdminVerification,
  DeleteTodosController
);

export { AdminRouter };
