const router = require("express").Router();
const adminController = require("../Controllers/adminController");
const userController = require("../Controllers/userController");
const courseController = require("../Controllers/courseController");
const instractorController = require("../Controllers/instractorController");
const skillController = require("../Controllers/skillController");
const lessonController = require("../Controllers/lessonController");

//test git

//admin route
router.get("/create", adminController.create);
router.get("/read", adminController.read);
router.get("/update", adminController.update);
router.get("/delete", adminController.delete);

//user route
router.get("/create", userController.create);
router.get("/read", userController.read);
router.get("/update", userController.update);
router.get("/delete", userController.delete);

//course route
router.post("/create-course", courseController.CreateCourse);
router.get("/read", courseController.read);
router.get("/update", courseController.update);
router.get("/delete", courseController.delete);

//Instractor route
router.post("/create-instractor", instractorController.crateInstractor);

//Skill Route
router.post("/create-skill", skillController.CrateSkill);

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "lesson_videos", // Set the folder name where the video will be stored
    resource_type: "video", // Specify the resource type
    allowed_formats: ["mp4", "webm"], // Specify allowed video formats
    use_filename: true, // Use the original file name as the Cloudinary public ID
  },
});

//lesson Route
router.post("/create-lesson", upload.single("videoFile"), async (req, res) => {
  const { title, note } = req.body;
  const videoFileUrl = req.file.path; // The Cloudinary URL will be available at req.file.path

  const newLesson = new LessonModel({
    title,
    videoFileUrl,
    note,
  });

  await newLesson.save();
  res.send("Lesson created successfully");
});
module.exports = router;
