const uploader = require("../../utilities/multipleUploader");

function attachmentUpload(req, res, next) {
  const upload = uploader(
    "attachments",
    ["image/png", "image/jpg", "image/jpeg"],
    1000000,
    2,
    "Only .jpg, .jpeg or .png format allowed!"
  );

  // call middleware function
  upload.any()(req, res, (err) => {
    if (err) {
      res.status(500).json({
        errors: {
          avatar: {
            msg: err.message,
          },
        },
      });
    } else {
      next();
    }
  });
}

module.exports = attachmentUpload;
