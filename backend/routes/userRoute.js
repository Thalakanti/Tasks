const controllers = require("../controllers/userController");

const express = require("express");

const router = express.Router();

router.post("/Signup", controllers.Signup);
router.post("/login", controllers.Loginuser);
router.get("/data", controllers.getAllUsers);
module.exports = router;
