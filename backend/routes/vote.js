const router = require("express").Router();
const controllers = require("../controllers/vote");
const middleware = require("../middlewares/middleware");
const schemas = require("../utils/schemas/schemas");

router.post("/", middleware.authenticateToken, controllers.createVote);
router.delete("/", middleware.authenticateToken, controllers.deleteVote);

module.exports = router;
