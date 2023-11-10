const CreateService = require("../Services/common/CreateService");
const LessonModel = require("../Models/LessonModel");
// const cloudinary = require("../Helper/cloudinaryConfig");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRATE,
});

exports.CreateLesson = async (req, res) => {
  const { title, note } = req.body;
  const videoFileUrl = req.file.path; // The Cloudinary URL will be available at req.file.path

  try {
    const newLesson = new LessonModel({
      title,
      videoFileUrl,
      note,
    });

    await newLesson.save();
    res.send("Lesson created successfully");
  } catch (error) {
    res.status(200).json({ status: false });
  }
};
