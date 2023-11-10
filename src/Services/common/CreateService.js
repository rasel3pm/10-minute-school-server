const CreateService = async (req, DataModel) => {
  try {
    let postBody = req.body;
    let data = await DataModel.create(postBody);
    return { status: "success", data: data };
  } catch (error) {
    return {
      status: false,
      message: "Something went wrong",
      data: error.toString(),
    };
  }
};
module.exports = CreateService;
