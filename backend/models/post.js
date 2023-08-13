const post = require("./sequelize");
const sequelize = require("../models/sequelize");

const getPostById = (id) => {
  const sqlQuery = `
 SELECT * from posts_v
WHERE
    id = ${id}
`;
  const connection = require("./utils");

  return connection.sqlQueryPromise(sqlQuery);
};

const getPosts = () => {
  const sqlQuery = `SELECT * FROM posts_v`;
  const connection = require("./utils");

  return connection.sqlQueryPromise(sqlQuery);
};

const createPost = async (title, description, repo_url, user_id) => {
  const createdPost = await sequelize.post.create({
    title: title,
    description: description,
    repo_url: repo_url,
    user_id: user_id,
  });
  return createdPost.id;
};
module.exports = {
  getPosts,
  createPost,
  getPostById,
  post,
};
