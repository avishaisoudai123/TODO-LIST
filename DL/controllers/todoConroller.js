require("../db").connectDB();
const todoModel = require("../models/todo");

const create = async (todo) => {
  return await todoModel.create(todo);
};
const read = async () => {
  return await todoModel.find();
};

const readone = async (id)=>{
  return await todoModel.findOne({_id:id});
}

const update = async (id,updated) =>{
  return await todoModel.findOneAndUpdate({_id:id},updated);
}

const remove = async (id) =>{
  return await todoModel.findByIdAndRemove(id);
}

