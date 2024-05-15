import express from 'express'
import {FormController,UpdateTodoController,DeleteTodoController,TodoDataController} from '../controllers/Todo.controller.js'
import {JWTverificationMiddleware} from '../middlewares/jwt_verify.middleware.js'
const TodoRouter =express.Router()

TodoRouter.route("/alltodos").get(JWTverificationMiddleware,TodoDataController)
TodoRouter.route("/create").post(JWTverificationMiddleware,FormController)
TodoRouter.route("/update/:id").patch(JWTverificationMiddleware,UpdateTodoController)
TodoRouter.route("/delete/:id").delete(JWTverificationMiddleware,DeleteTodoController)

export default TodoRouter