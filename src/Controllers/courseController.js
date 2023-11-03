exports.create = async (req, res) => {
  try {
    let data = "Success";
    res.status(200).json({ status: "Success", data: data });
  } catch (e) {
    res.status(200).json({ status: "fail", message: "Something Went wrong" });
  }
};

exports.read = async (req, res) => {
  try {
    let data = "Success";
    res.status(200).json({ status: "Success", data: data });
  } catch (e) {
    res.status(200).json({ status: "fail", message: "Something Went wrong" });
  }
};

exports.delete = async (req, res) => {
  try {
    let data = "Success";
    res.status(200).json({ status: "Success", data: data });
  } catch (e) {
    res.status(200).json({ status: "fail", message: "Something Went wrong" });
  }
};

exports.update = async (req, res) => {
  try {
    let data = "Success";
    res.status(200).json({ status: "Success", data: data });
  } catch (e) {
    res.status(200).json({ status: "fail", message: "Something Went wrong" });
  }
};
