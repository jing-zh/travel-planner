require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const requireAuth = async (req, res, next) => {
  //verify authentication

  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "需要授权令牌" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET);

    req.user = await User.findOne({ _id }).select("_id");
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "请求未获批准" });
  }
};

module.exports = requireAuth;
