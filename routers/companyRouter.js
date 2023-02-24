const express = require("express");
const {
  getAllOrganisation,
  postOrganisation,
} = require("../controllers/companyControllers");
const companyRouter = express.Router();

companyRouter.get("/", getAllOrganisation).post("/", postOrganisation);

module.exports = companyRouter;
