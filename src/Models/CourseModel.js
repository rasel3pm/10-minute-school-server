const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the Course schema
const CourseSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    instractorID: {
      type: Schema.Types.ObjectId,
      ref: "Instructor", // Assuming there is an Instructor model
    },
    skillID: {
      type: Schema.Types.ObjectId,
      ref: "Skill", // Assuming there is a Skill model
    },
    lessonID: {
      type: Schema.Types.ObjectId,
      ref: "Lesson", // Assuming there is a Lesson model
    },
    learningDes: {
      type: String,
      required: true,
    },
    courseDes: {
      type: String,
      required: true,
    },
    feedback: {
      type: [String], // Assuming Feedback is an array of strings
    },
  },
  { timestamps: true, versionKey: false }
);

// Create and export the Course model
const Course = mongoose.model("Course", CourseSchema);
module.exports = Course;
