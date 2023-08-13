const router = require("express").Router();
const controllers = require("../controllers/lk_post_subject");

router.get("/", controllers.createPostSubject);

module.exports = router;
