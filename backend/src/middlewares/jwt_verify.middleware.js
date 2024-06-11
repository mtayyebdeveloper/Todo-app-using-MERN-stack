import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

const JWTverificationMiddleware = async (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  
  if (!token) {
    return res.status(401).json({ message: "Token not found." });
  }

  try {
    const user = jwt.verify(token,process.env.JWT_TOKEN);

    if(!user) {
      return res.status(401).json({ message: "invalid token" });
    }

    const userdata = await User.findOne({ email: user.email });

    req.user = userdata;
    req.userID = userdata._id.toString();

    next();
  } catch (error) {
    return res.status(500).json({ message: "Unauthorized user." });
  }
};

export { JWTverificationMiddleware };
