const db = require("../models/review");
const Joi = require("joi");
// const getReview = async (req, res) => {
//   const data = await db.getReview();
//   res.json(data);
// };

const createReview = async (req, res) => {
  const { post_id, user_id, review, file_ids } = req.body;

  const review_id = await db.createReview(post_id, user_id, review);
  const data = await db.create_lk_file_review(review_id, file_ids);

  res.status(200).json({
    success: true,
    message: "Resource created successfully",
    data: review_id,
  });
};

module.exports = { createReview };
