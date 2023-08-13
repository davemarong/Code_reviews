const db = require("../models/user");
const bcrypt = require("bcrypt");

const getUsers = async (req, res) => {
  const data = await db.getUsers();
  res.json(data);
};

module.exports = { getUsers };
