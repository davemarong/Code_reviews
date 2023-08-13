const router = require("express").Router();
const controllers = require("../controllers/review");
const middleware = require("../middlewares/middleware");
const schemas = require("../utils/schemas/schemas");

router.post("/", middleware.validate(schemas.review), controllers.createReview);

module.exports = router;
