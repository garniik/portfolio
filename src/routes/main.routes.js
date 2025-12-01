const router = require("express").Router();
const mainController = require("../controllers/main.controller");

router.get("/", mainController.home);
router.get("/projects", mainController.projects);
router.get("/contact", mainController.contact);

module.exports = router;
