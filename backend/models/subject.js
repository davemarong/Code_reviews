const getSubjects = () => {
  const sqlQuery = `
    SELECT * from subject`;
  const connection = require("./utils");

  return connection.sqlQueryPromise(sqlQuery);
};

module.exports = { getSubjects };
