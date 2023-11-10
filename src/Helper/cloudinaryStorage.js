const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const cloudinary = require("../Helper/cloudinaryConfig");
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "lesson_videos", // Set the folder name where the video will be stored
    resource_type: "video", // Specify the resource type
    allowed_formats: ["mp4", "webm"], // Specify allowed video formats
    use_filename: true, // Use the original file name as the Cloudinary public ID
  },
});
let upload = multer({ storage: storage, limits: "50mb" });
module.exports = upload;
