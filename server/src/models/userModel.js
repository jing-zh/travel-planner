const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//static signup method

userSchema.statics.signup = async function (email, password) {
  //validation
  if (!email || !password) {
    throw Error("必须填写邮箱及密码");
  }

  if (!validator.isEmail(email)) {
    throw Error("请填写正确的邮箱地址");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("请填写安全性更强的密码");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("邮件地址已被使用");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });

  return user;
};

//static login method

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("必须填写邮件地址及密码");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("邮箱地址错误");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("密码错误");
  }

  return user;
};
module.exports = mongoose.model("User", userSchema);
