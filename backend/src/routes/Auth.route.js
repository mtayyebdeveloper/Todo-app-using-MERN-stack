import express from 'express'
import {HomeController,signupController,loginController,userdataController} from '../controllers/Auth.controller.js'
import { JWTverificationMiddleware} from '../middlewares/jwt_verify.middleware.js'
const authRouter =express.Router()

authRouter.route("/").get(HomeController)
authRouter.route("/register").post(signupController)
authRouter.route("/login").post(loginController)
authRouter.route("/user").get(JWTverificationMiddleware,userdataController)

export default authRouter