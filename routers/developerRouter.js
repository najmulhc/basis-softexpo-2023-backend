const express = require("express");
const {
  getAllDevelopers,
  postDeveloper,
} = require("../controllers/developerController");
const developerRouter = express.Router();

developerRouter.get("/", getAllDevelopers).post("/", postDeveloper);

module.exports = developerRouter;
