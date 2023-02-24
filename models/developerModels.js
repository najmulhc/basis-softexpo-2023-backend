const { Schema, default: mongoose } = require("mongoose");

const developerSchema = new Schema({
    name: String, 
    organization: String, 
    socialMedia: String,
    opinion: String
});

const Developer = mongoose.model("Developer",developerSchema);


module.exports = Developer;