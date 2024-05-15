import { User } from "../models/user.model.js";

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

const signupController = async (req, res, next) => {
  try {
    const { fullName, username, email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(201).json({ message: "User already exist." });
    }

    const user = await User.create({ fullName, username, email, password });

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
};
