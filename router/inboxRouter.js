// external imports
const express = require("express");

// internal imports
const { getInbox } = require("../controller/inboxController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const { checkLogin } = require("../middlewares/common/checkLogin");

const router = express.Router();

// set page title
const page_title = "Inbox";

// Load inbox page
router.get("/", decorateHtmlResponse(page_title), checkLogin, getInbox);

module.exports = router;
