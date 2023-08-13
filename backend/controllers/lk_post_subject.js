const db = require("../models/lk_post_subject");
const createPostSubject = async (req, res) => {
  const { post_id, values } = req.body;

  const data = await db.createPostSubject(post_id, values);
  res.json(data);
};

module.exports = { createPostSubject };
