// Librería de node.js que permite conectar una BD y trabajar con MongoDB
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://admin1:2B6tLpNN9ch7dEZ2@cluster0.duitmxa.mongodb.net/music");
    console.log('Se conectó a la BD')
  } catch (error) {
    console.log(error)
  }
};

export { connectDB }