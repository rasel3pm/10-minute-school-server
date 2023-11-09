const CreateService = require("../Services/common/CreateService");
const LessonModel = require("../Models/LessonModel");
exports.CreateLesson = async (req, res) => {
  let result = await CreateService(req, LessonModel);
  res.status(200).json(result);
};
