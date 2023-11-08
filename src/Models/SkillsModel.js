const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the Skills schema
const SkillsSchema = new Schema({
  Skillname: {
    type: String,
    required: true,
  },
});

// Create and export the Skills model
module.exports = mongoose.model("Skill", SkillsSchema);
