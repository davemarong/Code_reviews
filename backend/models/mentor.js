const getMentors = () => {
  const sqlQuery = `
    SELECT subject.name AS subject, user.username AS name, l.experience
    FROM
        lk_mentor_subject AS l
            INNER JOIN
        subject ON l.subject_id = subject.id
            INNER JOIN
        user ON l.mentor_id = user.id`;
  const connection = require("./utils");

  return connection.sqlQueryPromise(sqlQuery);
};
const getMentorById = (id) => {
  const sqlQuery = `
    SELECT subject.name AS subject, user.username AS name, l.experience
    FROM
        lk_mentor_subject AS l
            INNER JOIN
        subject ON l.subject_id = subject.id
            INNER JOIN
        user ON user.id = ${id}`;
  const connection = require("./utils");

  return connection.sqlQueryPromise(sqlQuery);
};

module.exports = { getMentors, getMentorById };
