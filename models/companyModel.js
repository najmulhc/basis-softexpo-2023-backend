const { Schema, default: mongoose } = require("mongoose");

const organizationSchema = new Schema({
  name: { type: String, required: true },
  officeAddress: { type: String, required: true },
  sector: { type: String, required: true },
  email: { type: String, required: true },
});

const Organization = mongoose.model("Organization", organizationSchema);

module.exports = Organization;
