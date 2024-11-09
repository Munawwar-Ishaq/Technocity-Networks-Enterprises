const express = require("express");
const LoginController = require("../Controllers/LoginController");
const GetAdminInfoController = require("../Controllers/GetAdminInfoController");
const AuthMiddleware = require("../Middleware/auth");
const CreateAccountController = require("../Controllers/CreateAccountController");
const UpdateAdminController = require("../Controllers/UpdateAdminController");
const AddAreaController = require("../Controllers/AddAreaController");
const GetAreaController = require("../Controllers/GetAreaController");

const Routes = express.Router();

// All API Routes Start

Routes.post("/login", LoginController);
Routes.post("/get-admin-info", AuthMiddleware, GetAdminInfoController);
Routes.post("/update-admin-info", AuthMiddleware, UpdateAdminController);
Routes.post("/create-account", CreateAccountController);
Routes.post("/add-area", AuthMiddleware, AddAreaController);
Routes.get("/get-area", AuthMiddleware, GetAreaController);

// Api Routes End

module.exports = Routes;
