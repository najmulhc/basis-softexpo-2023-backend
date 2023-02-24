const Developer = require("../models/developerModels");

const postDeveloper = (req, res) => {
  const developer = req.body;
  const createdDeveloper = new Developer(developer);
  createdDeveloper.save((err, developer) => {
    if (err) {
      res.status(400).json({
        status: "failed",
        message: err.message,
      });
    } else {
      res.status(200).json({
        status: "success",
        data: developer,
      });
    }
  });
};

const getAllDevelopers = (req, res) => {
  Developer.find({}, (err, list) => {
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

module.exports = { postDeveloper, getAllDevelopers };
