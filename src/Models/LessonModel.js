const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Define the Lesson schema
const LessonSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    video: [
      {
        type: String,
        required: true,
      },
    ],

    note: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false }
);

// Create and export the Lesson model
module.exports = mongoose.model("Lesson", LessonSchema);
