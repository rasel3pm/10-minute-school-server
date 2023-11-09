const CreateService = require("../Services/common/CreateService");
const InstractorModel = require("../Models/InstractorModel");
exports.crateInstractor = async (req, res) => {
  let result = await CreateService(req, InstractorModel);
  res.status(200).json(result);
};
