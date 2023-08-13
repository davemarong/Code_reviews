const router = require("express").Router();
const controllers = require("../controllers/github");
const middleware = require("../middlewares/middleware");

router.get(
  "/repos",
  middleware.authenticateToken,
  middleware.getAccessToken,
  middleware.axiosOptionsGithub,
  controllers.getRepos
);
router.get(
  "/user",
  middleware.authenticateToken,
  middleware.getAccessToken,
  middleware.axiosOptionsGithub,
  controllers.getUser
);
router.get(
  "/repo/:repo_name",
  middleware.authenticateToken,
  middleware.getAccessToken,
  middleware.axiosOptionsGithub,
  controllers.getRepoContent
);

router.post(
  "/repo/:repo_name/folder",
  middleware.authenticateToken,
  middleware.getAccessToken,
  middleware.axiosOptionsGithub,
  controllers.getRepoFolderContent
);

module.exports = router;
