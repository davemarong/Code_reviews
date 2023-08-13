const sequelize = require("../models/sequelize");

// const createReview = (post_id, user_id, review) => {
//   const sqlQuery = `
//     INSERT INTO review (post_id, user_id, review) VALUES (${post_id}, ${user_id}, "${review}")`;
//   const connection = require("./utils");

//   return connection.sqlQueryPromise(sqlQuery);
// };
const createReview = async (post_id, user_id, review) => {
  const createdReview = await sequelize.review.create({
    post_id: post_id,
    user_id: user_id,
    review: review,
  });

  return createdReview.id;
};
const create_lk_file_review = async (review_id, focusFiles_ids) => {
  console.log(focusFiles_ids);
  const review_files = focusFiles_ids.map((file) => {
    return { file_id: file, review_id: review_id };
  });
  const data = await sequelize.lk_file_review.bulkCreate(review_files);
  return data;
};
const getReviewsFromPost2 = async (post_id) => {
  console.log(focusFiles_ids);
  const review_files = focusFiles_ids.map((file) => {
    return { file_id: file, review_id: review_id };
  });
  const data = await sequelize.lk_file_review.bulkCreate(review_files);
  return data;
};
const getReviewsFromPost = (post_id) => {
  const sqlQuery = `
    SELECT * from reviews_from_post_v
WHERE
    post_id = ${post_id}
    `;

  const connection = require("./utils");

  return connection.sqlQueryPromise(sqlQuery);
};
module.exports = { createReview, getReviewsFromPost, create_lk_file_review };
