const getUsers = () => {
  const sqlQuery = `
    SELECT * from user`;
  const connection = require("./utils");

  return connection.sqlQueryPromise(sqlQuery);
};

module.exports = { getUsers };
