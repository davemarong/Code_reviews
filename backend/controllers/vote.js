const db = require("../models/vote");
const Joi = require("joi");

const createVote = async (req, res) => {
  const { user } = req;
  const { post_id } = req.body;
  console.log(user);

  const inserted_vote = await db.createVote(post_id, user.id);
  res.status(200).json({
    success: true,
    message: "Vote created successfully",
    data: inserted_vote,
  });
};
const getVotesCountFromPost = async () => {
  const votes_counted = await db.countVotesFromPost(post_id);
  return votes_counted;
};

const deleteVote = async (req, res) => {
  const { user } = req;
  const { post_id } = req.body;
  console.log(user);

  const inserted_vote = await db.createVote(post_id, user.id);
  res.status(200).json({
    success: true,
    message: "Vote created successfully",
    data: inserted_vote,
  });
};

module.exports = { createVote, getVotesCountFromPost, deleteVote };
