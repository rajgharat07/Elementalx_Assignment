const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://gharatraj077:raj24@cluster0.wuygu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
      );      
};

module.exports = connectDB;