const mongoose = require("mongoose");
require("dotenv").config();

const dbUri = process.env.DB_URI;

async function connectToDatabase() {
  try {
    await mongoose.connect(dbUri , {
      dbName : 'Network'
    });
    console.log("Connected to  database successfully!");
  } catch (error) {
    console.error("Database Connection Error:", error);
  }
}

module.exports = { connectToDatabase };
