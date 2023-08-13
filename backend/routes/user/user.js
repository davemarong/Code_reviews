const router = require("express").Router();
const controllers = require("../../controllers/user");
const middleware = require("../../middlewares/middleware");

router.get("/", middleware.authenticateToken, controllers.getUsers);

module.exports = router;
