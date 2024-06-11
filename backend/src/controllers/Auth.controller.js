import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { cloudinaryUpload } from "../middlewares/cloudinary.middleware.js";

const HomeController = (req, res) => {
  res.send("Home is ready.........");
};

const userdataController = async (req, res, next) => {
  try {
    const user = req.user;

    if (!user) {
      return res.status(201).json({ message: "User data not found." });
    }

    return res
      .status(200)
      .json({ message: "User data found successfuly.", user });
  } catch (error) {
    next(error);
  }
};

const updateUserController = async (req, res, next) => {
  const _id = req.userID;
  const file = req.file;
  const { fullName, username, email, currentpassword, newpassword } = req.body;
  try {
    if (!file) {
      return res.status(201).json({ message: "Please select an image." });
    }
    const findUser = await User.findOne({ _id });
    if (!findUser) {
      return res.status(201).json({ message: "User not found." });
    }
    if (!fullName && !username && !email && !currentpassword && !newpassword) {
      return res
        .status(201)
        .json({ message: "Please fill the field to update." });
    }

    const comparePassword = await bcrypt.compare(
      currentpassword,
      findUser.password
    );
    if (!comparePassword) {
      return res.status(201).json({ message: "Wrong password." });
    }

    const files = await cloudinaryUpload(file.path);

    const saltround = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(newpassword, saltround);

    const user = await User.updateOne(
      { _id },
      {
        fullName,
        username,
        email,
        avatar: files.secure_url,
        password,
      }
    );
    if (!user) {
      return res.status(201).json({ message: "User not updated." });
    }

    return res.status(200).json({ message: "User updated successfuly." });
  } catch (error) {
    next(error);
  }
};

const signupController = async (req, res, next) => {
  try {
    const file = req.file;
    const { fullName, username, email, password } = req.body;

    if (!file) {
      return res.status(201).json({ message: "Enter an image." });
    }

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(201).json({ message: "User already exist." });
    }

    const usernameExist = await User.findOne({ username });

    if (usernameExist) {
      return res.status(201).json({ message: "User already exist." });
    }
    const files = await cloudinaryUpload(file.path);

    const user = await User.create({
      fullName,
      username,
      email,
      avatar: files.secure_url,
      password,
    });

    if (!user) {
      return res.status(201).json({ message: "User creating error." });
    }

    return res.status(200).json({
      message: "User created successfuly.",
      userID: user._id.toString(),
    });
  } catch (error) {
    next(error);
  }
};

const loginController = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const usernameExist = await User.findOne({ username });

    if (!usernameExist) {
      return res.status(201).json({ message: "Wrong username." });
    }

    const passwordExist = await usernameExist.comparePassword(password);

    if (!passwordExist) {
      return res.status(201).json({ message: "Wrong password." });
    }

    return res.status(200).json({
      message: "Login Successfuly.",
      token: await usernameExist.genarateToken(),
      userID: usernameExist._id.toString(),
    });
  } catch (error) {
    next(error);
  }
};

export {
  HomeController,
  signupController,
  loginController,
  userdataController,
  updateUserController,
};
