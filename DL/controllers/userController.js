//require("../db").connectDB();
const userModel = require("../models/user");

const create = async (user) => {
  return await userModel.create(user);
};

const read = async () => {
  return await userModel.find();
};

const readOne = async (id) => {
  return await userModel.findOne({ _id: id });
};

const update = async (id, updated) => {
  return await userModel.findOneAndUpdate({ _id: id }, updated);
};

const remove = async (id) => {
  console.log(await userModel.findOneAndDelete(id));
};

