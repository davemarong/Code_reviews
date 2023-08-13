const sequelize = require("../models/sequelize");

const createVote = async (post_id, user_id) => {
  const createdVote = await sequelize.vote.create({
    post_id: post_id,
    user_id: user_id,
  });

  return createdVote;
};
const getVotesFromPost = async (post_id) => {
  const votes = await sequelize.vote.findAll({
    where: {
      post_id: post_id,
    },
    attributes: ["id", "post_id", "user_id", "created_at"],
  });
  return votes;
};
const countVotesFromPost = async (post_id) => {
  const votes = await sequelize.vote.count({
    where: {
      post_id: post_id,
    },
  });
  return votes;
};

module.exports = { createVote, getVotesFromPost, countVotesFromPost };
