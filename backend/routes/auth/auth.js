const router = require("express").Router();
const controllers = require("../../controllers/auth");
const passport = require("../../utils/passport");
const middleware = require("../../middlewares/middleware");

router.get("/github", passport.authenticate("github"));
router.get(
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect: "/login",
  }),
  // middleware.isAuthenticated,
  controllers.githubCallback
);

module.exports = router;
