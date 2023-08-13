const sequelize = require("../models/sequelize");

const createUserOauth = (username, github_url, avatar_url) => {
  const sqlQuery = `
    INSERT INTO user (username,github_auth,github_url,avatar_url) VALUES ("${username}",1,"${github_url}","${avatar_url}")`;
  const connection = require("./utils");

  return connection.sqlQueryPromise(sqlQuery);
};
const createUser = (username, password) => {
  const sqlQuery = `
    INSERT INTO user (username, password) VALUES ("${username}", "${password}")`;
  const connection = require("./utils");

  return connection.sqlQueryPromise(sqlQuery);
};
const loginUser = (username, password) => {
  const sqlQuery = `
    INSERT INTO user (username, password) VALUES ("${username}", "${password}")`;
  const connection = require("./utils");

  return connection.sqlQueryPromise(sqlQuery);
};

const insertAccessToken = async (access_token, username) => {
  const [updatedRowCount] = await sequelize.user.update(
    { access_token },
    { where: { username } }
  );
  return updatedRowCount;
};

module.exports = { createUserOauth, createUser, loginUser, insertAccessToken };
