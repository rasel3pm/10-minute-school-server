const CreateService = require("../Services/common/CreateService");
const SkillModel = require("../Models/SkillsModel");
exports.CrateSkill = async (req, res) => {
  let result = await CreateService(req, SkillModel);
  res.status(200).json(result);
};
