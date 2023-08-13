const getReactionsFromPost = (post_id) => {
  const sqlQuery = `
   SELECT * FROM reactions_from_post_v
WHERE post_id = ${post_id}
    `;

  const connection = require("./utils");

  return connection.sqlQueryPromise(sqlQuery);
};
const getReactionsCount = (post_id) => {
  const sqlQuery = `
   SELECT 
    COUNT(CASE reaction_id
        WHEN '1' THEN 1
        ELSE NULL
    END) AS hearth,
    COUNT(CASE reaction_id
        WHEN '2' THEN 1
        ELSE NULL
    END) AS smiley,
    COUNT(CASE reaction_id
        WHEN '3' THEN 1
        ELSE NULL
    END) AS hundred,
    COUNT(CASE reaction_id
        WHEN '4' THEN 1
        ELSE NULL
    END) AS thumbsUp,
    COUNT(CASE reaction_id
        WHEN '5' THEN 1
        ELSE NULL
    END) AS nerd
FROM
    lk_reaction_post
WHERE
    post_id = ${post_id}
    `;

  const connection = require("./utils");

  return connection.sqlQueryPromise(sqlQuery);
};
module.exports = { getReactionsFromPost, getReactionsCount };
