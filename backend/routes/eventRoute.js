const controllers = require("../controllers/EventController");

const express = require("express");

const router = express.Router();
const validation = require("../middleware/validation");

// router.post("/Signup", controllers.userSignup);
// router.post("/login", controllers.userLogin);
router.get("/listAllEvents", controllers.listAllEvents);
router.get("/getEvent", controllers.getEvent);
router.post("/createEvent", controllers.createEvent);
router.put("/updateevent/:id", controllers.updateEventById);
router.put("/delete/:id", controllers.softDeleteById);

module.exports = router;
