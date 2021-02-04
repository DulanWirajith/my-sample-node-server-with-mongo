const express = require("express");
const router = express.Router();
const testController = require("../services/controllers/TestController");

router.post("/register_test", testController.testRegistration);
router.get("/get_test/:test_no", testController.getTest);
router.get("/get_tests", testController.getTests);

module.exports = router;
