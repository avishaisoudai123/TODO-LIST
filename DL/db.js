const mongoose = require("mongoose");
require("dotenv").config();

exports.connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://AS:0526900818@cluster0.rwzih.mongodb.net/todo_list?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
      }
    );
    console.log("DB Connected");
  } catch (error) {
    console.error("mongoose error", error);
  }
};
