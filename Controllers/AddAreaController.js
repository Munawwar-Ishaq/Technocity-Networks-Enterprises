const AdminModel = require("../Models/AdminModel");
const AreaModel = require("../Models/AreaModel");

const Controller = async (req, res) => {
  let { areaname } = req.body;

  if (!areaname) {
    return res.status(400).json({ error: "Area name is required." });
  }

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

  let areaExists = await AreaModel.findOne({ areaname });

  if (areaExists) {
    return res.status(409).json({ error: "Area name already exists." });
  }

  let area = new AreaModel({ areaname });

  area
    .save()
    .then(() => {
      AreaModel.find({}).then((area) => {
        const AllAreas = area;
        return res
          .status(201)
          .json({ message: "Area created successfully.", data: AllAreas });
      });
    })
    .catch((err) => {
      if (err) {
        return res.status(500).json({ error: "Failed to create area." });
      }
    });
};

module.exports = Controller;
