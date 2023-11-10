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

//lesson Route
router.post(
  "/create-lesson",
  upload.single("videoFile"),
  lessonController.CreateLesson
);

module.exports = router;
