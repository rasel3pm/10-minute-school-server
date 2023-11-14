const LessonModel = require("../Models/LessonModel");

exports.CreateLesson = async (req, res) => {
  try {
    const { title, note } = req.body;
    // The Cloudinary URL will be available at req.file.path
    const videoFileUrl = req.files.map((file) => file.path); //for upload multiple video
    //const singleVideo = req.file.path;
    const newLesson = new LessonModel({
      title: title,
      video: videoFileUrl,
      note: note,
    });

    await newLesson.save();
    res
      .status(200)
      .json({ status: true, message: "Lesson created successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
