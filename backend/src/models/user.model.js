import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (req, res, next) {
  if (!this.isModified("password")) {
    next();
  }

  try {
    const saltround = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, saltround);
    this.password = hashedPassword;
  } catch (error) {
    next(error);
  }
});

userSchema.methods.comparePassword = async function (userPassword) {
  try {
    return await bcrypt.compare(userPassword, this.password);
  } catch (error) {
    console.error(error);
  }
};

userSchema.methods.genarateToken = async function () {
  try {
    return await jwt.sign(
      {
        userID: this._id.toString(),
        email: this.email,
        admin: this.isAdmin,
      },
      process.env.JWT_TOKEN,
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.error(error);
  }
};

export const User = mongoose.model("User", userSchema);
