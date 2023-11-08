const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the Lesson schema
const LessonSchema = new Schema(
  {
    video: [
      {
        title: String,
        url: String,
      },
    ],
    note: [String],
  },
  { timestamps: true, versionKey: false }
);

// Create and export the Lesson model
module.exports = mongoose.model("Lesson", LessonSchema);
