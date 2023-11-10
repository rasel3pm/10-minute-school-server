const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the Instructor schema
const InstructorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false }
);

// Create and export the Instructor model
module.exports = mongoose.model("Instructor", InstructorSchema);
