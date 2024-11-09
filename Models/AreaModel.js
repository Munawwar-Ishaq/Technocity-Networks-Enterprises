const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    areaname: String,
  },
  { timestamps: true }
);


module.exports = mongoose.model("Area", Schema);