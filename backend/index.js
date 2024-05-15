import express, { json } from "express";
import AuthRouter from "./src/routes/Auth.route.js";
import TodoRouter from "./src/routes/todo.route.js";
import "dotenv/config";
import cors from "cors";
import { ErrorHandler } from "./src/middlewares/errorhandling.middlware.js";
import {dbConnection} from './src/database/dbConnection.js'

const app = express();

// all middlewares.................................
// for json data..........
app.use(json());
dbConnection()

// connecting frontend to backend.......
const options = {
  origin: process.env.FRONTEND_SITE_URL,
  Credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 200
};
app.use(cors(options));

// routes.................
app.use("/api/auth", AuthRouter);
app.use("/api/todo",TodoRouter)

// error handler..........
app.use(ErrorHandler);

app.listen(process.env.PORT, () => {
  console.log(
    `Your Server is runing at PORT: http://localhost:${process.env.PORT}/api/auth`
  );
});
