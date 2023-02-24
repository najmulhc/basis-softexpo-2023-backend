const Organization = require("../models/companyModel");

const postOrganisation = (req, res) => {
  const company = req.body;
  const createdCompany = new Organization(company);
  createdCompany.save((err, organization) => {
    if (err) {
      res.status(400).json({
        status: "failed",
        message: err.message,
      });
    } else {
      res.status(200).json({
        status: "success",
        data: organization,
      });
    }
  });
};

const getAllOrganisation = (req, res) => {
  Organization.find({}, (err, list) => {
    if (err) {
      res.status(500).json({
        status: "failed",
        message: err.message,
      });
    } else {
      res.status(200).json({
        status: "success",
        data: list,
      });
    }
  });
};

module.exports = { postOrganisation, getAllOrganisation };
