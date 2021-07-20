// external imports
const express = require("express");

// internal imports
const { getLogin, login, logout } = require("../controller/loginController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {
  doLoginValidator,
  doLoginValidationHandler,
} = require("../middlewares/login/loginValidators");
const { redirectLoggedIn } = require("../middlewares/common/checkLogin");

const router = express.Router();

// set the page title
const page_title = "Login";

// Load login page
router.get("/", decorateHtmlResponse(page_title), redirectLoggedIn, getLogin);

// login
router.post(
  "/",
  decorateHtmlResponse(page_title),
  doLoginValidator,
  doLoginValidationHandler,
  login
);

router.delete("/", logout);

module.exports = router;
