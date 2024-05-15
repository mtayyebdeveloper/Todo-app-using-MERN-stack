import mongoose from "mongoose";

export const dbConnection = async (next) => {
  try {
    const connection = await mongoose.connect(process.env.DATABASE_URL);
  if (!connection) {
    console.log("Database connection error..");
  }
  console.log("Database connected successfuly.....");
  } catch (error) {
    return console.log(error);
  }
};
