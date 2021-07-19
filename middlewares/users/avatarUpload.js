const uploader = require("../../utilities/singleUploader");

function avatarUpload(req, res, next) {
  const upload = uploader(
    "avatars",
    ["image/png", "image/jpg", "image/jpeg"],
    1000000,
    "only .png, .jpg or .jpeg are allowed"
  );

  // call the middle ware function
  upload.any()(req, res, (err) => {
    if (err) {
      res.status(500).json({
        error: {
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

module.exports = avatarUpload;
