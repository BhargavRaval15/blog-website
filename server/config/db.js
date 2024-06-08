const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect("mongodb://localhost:27017");
    console.log(`Database Connected`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
