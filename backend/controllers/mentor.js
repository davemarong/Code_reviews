const db = require("../models/mentor");
const getMentors = async (req, res) => {
  try {
    const data = await db.getMentors();
    res.json(data);
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
};
const getMentorById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await db.getMentorById(id);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
};

module.exports = { getMentors, getMentorById };
