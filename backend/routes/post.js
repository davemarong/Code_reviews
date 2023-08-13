const router = require("express").Router();
const controllers = require("../controllers/post");
const middleware = require("../middlewares/middleware");
const schemas = require("../utils/schemas/schemas");
router.get("/", controllers.getPosts);
router.post(
  "/",
  middleware.authenticateToken,
  middleware.validate(schemas.post),
  controllers.createPost
);
router.get("/:id", controllers.getPostById);

module.exports = router;
