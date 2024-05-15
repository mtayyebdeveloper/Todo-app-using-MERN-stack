import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

const JWTverificationMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
  
  if (!token) {
    return res.status(401).json({ message: "Token not found." });
  }
  
  const jwttoken = token.replace("token", "").trim();
  console.log(jwttoken);
  
  try {
    console.log(process.env.JWT_TOKEN);
    const user = jwt.verify(jwttoken,process.env.JWT_TOKEN);

    if(!user) {
      return res.status(401).json({ message: "invalid token" });
    }

    const userdata = await User.find({ email: user.email });

    req.user = userdata;
    req.userID = userdata._id.toString();

    next();
  } catch (error) {
    return res.status(500).json({ message: "Unauthorized user." });
  }
};

export { JWTverificationMiddleware };
