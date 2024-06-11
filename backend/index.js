import express, { json } from "express";
import AuthRouter from "./src/routes/Auth.route.js";
import TodoRouter from "./src/routes/todo.route.js";
import contactRouter from "./src/routes/contact.route.js";
import "dotenv/config";
import cors from "cors";
import { ErrorHandler } from "./src/middlewares/errorhandling.middlware.js";
import {dbConnection} from './src/database/dbConnection.js'
import {AdminRouter} from './src/routes/Admin.route.js'

const app = express();

// all middlewares.................................
// for json data..........
app.use(json());
app.use("/public", express.static("public"));

// database connection.........
dbConnection()

// connecting frontend to backend.......
const options = {
  origin: process.env.FRONTEND_SITE_URL,
  Credentials: true,
  methods: ["GET", "POST", "PUT","PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 200
};
app.use(cors(options));

// routes.................
app.use("/api/auth", AuthRouter);
app.use("/api/todo",TodoRouter)
app.use("/api/admin",AdminRouter)
app.use("/api/contact",contactRouter)


// error handler..........
app.use(ErrorHandler);

app.listen(process.env.PORT, () => {
  console.log(
    `Your Server is runing at PORT: http://localhost:${process.env.PORT}/api/auth`
  );
});
