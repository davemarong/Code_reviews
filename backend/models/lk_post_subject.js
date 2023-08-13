const createPostSubject = (values) => {
  const sqlQuery = `
    INSERT INTO lk_post_subject (post_id,subject_id) VALUES ?`;
  const connection = require("./utils");

  return connection.multipleRowsSqlQueryPromise(sqlQuery, values);
};

module.exports = { createPostSubject };
