const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the Skills schema
const SkillsSchema = new Schema(
  {
    skillname: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
  },
  { timestamps: true, versionKey: false }
);

// Create and export the Skills model
module.exports = mongoose.model("Skill", SkillsSchema);
