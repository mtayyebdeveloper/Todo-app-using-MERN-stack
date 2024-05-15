import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    workspaceName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    massage: {
      type: String,
      required: false,
    },
    creator: {
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
    }
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);
