const { Schema, default: mongoose } = require("mongoose");

const developerSchema = new Schema({
    name: { type: String, required: true }, 
    organization: { type: String, required: true }, 
    socialMedia: { type: String, required: true },
    opinion: { type: String, required: true }
});

const Developer = mongoose.model("Developer",developerSchema);


module.exports = Developer;