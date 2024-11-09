const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const Routes = require("./Routes/Routes");
require("dotenv").config();
const { connectToDatabase } = require("./Config/config");

// Database Connection
connectToDatabase();

// App Variable Express
const app = express();

// Cors Defined
app.use(
  cors({
    origin: "*",
    methods: "GET, POST",
  })
);

// BodyParser Request body data to json
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));

// Port Variable
const port = process.env.PORT || 5888;

// Api Request Simple
app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

// Response To Json
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// All Api Route Define default Start with /api/v1/....
app.use("/api/v1", Routes);

// Reun Server
app.listen(port, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server is running on port ${port}`);
});
