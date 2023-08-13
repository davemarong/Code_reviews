const db = require("../models/file");

const createFile = async (req, res) => {
  const { name, download_url, api_url, user_id, post_id } = req.body;
  console.log(user_id);
  // validate
  const data = await db.createFile(post_id, user_id, file);

  res.json(data);
};

module.exports = { createFile };
