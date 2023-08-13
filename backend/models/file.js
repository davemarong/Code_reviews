const sequelize = require("../models/sequelize");

const createFiles = (values) => {
  const sqlQuery = `
    INSERT INTO file (name, download_url, api_url, user_id, post_id,html_url) VALUES ?`;
  const connection = require("./utils");

  return connection.multipleRowsSqlQueryPromise(sqlQuery, values);
};
const createMultipleFiles = (values) => {
  const sqlQuery = `
    INSERT INTO lk_post_subject (post_id,subject_id) VALUES ?`;
  const connection = require("./utils");

  return connection.multipleRowsSqlQueryPromise(sqlQuery, values);
};

const getFiles = async (post_id) => {
  const files = await sequelize.file.findAll({
    where: {
      post_id: post_id,
    },
    attributes: ["name", "download_url", "api_url", "id", "html_url"],
  });
  return files;
};
module.exports = { createFiles, getFiles };
