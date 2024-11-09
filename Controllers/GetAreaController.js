const AdminModel = require("../Models/AdminModel");
const AreaModel = require("../Models/AreaModel");

const Controller = async (req, res) => {
  let userID = req.headers["userID"];

  let find = await AdminModel.findById(userID);

  if (!find) {
    return res.status(401).json({ error: "Invalid admin." });
  }

  if (find.role !== "admin") {
    return res
      .status(403)
      .json({ error: "You are not authorized to perform this action." });
  }

  AreaModel.find({}).then((area) => {
    const AllAreas = area;
    return res
      .status(200)
      .json({ message: "All area get successfully", data: AllAreas });
  });
};

module.exports = Controller;
