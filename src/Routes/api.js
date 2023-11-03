const router = require("express").Router();
const adminController = require("../Controllers/adminController");
const userController = require("../Controllers/userController");
const courseController = require("../Controllers/courseController");


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



//product route
router.get("/create", courseController.create);
router.get("/read", courseController.read);
router.get("/update", courseController.update);
router.get("/delete", courseController.delete);



module.exports = router;
