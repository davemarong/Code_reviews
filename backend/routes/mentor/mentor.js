const router = require("express").Router();
const controllers = require("../../controllers/mentor");

router.get("/mentors", controllers.getMentors);
router.get("/mentor/:id", controllers.getMentorById);

module.exports = router;
