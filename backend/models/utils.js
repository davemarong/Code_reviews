const connection = () => {
  const mysql = require("mysql");
  const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "dave1011",
    database: "KodeMentor",
  });

  con.connect((err) => {
    if (err) throw err;
    console.log("Connected yes");
  });
  return con;
};
const connectionMultipleQueries = () => {
  const mysql = require("mysql");
  const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "dave1011",
    database: "KodeMentor",
    multipleStatements: true,
  });

  con.connect((err) => {
    if (err) throw err;
    console.log("Connected yes");
  });
  return con;
};

const sqlQueryPromise = (sqlQuery) => {
  const con = connection();
  return new Promise((resolve, reject) => {
    con.query(sqlQuery, (error, elements) => {
      if (error) {
        return reject(error);
      }
      return resolve(elements);
    });
  });
};
const multipleRowsSqlQueryPromise = (sqlQuery, values) => {
  const con = connection();
  return new Promise((resolve, reject) => {
    con.query(sqlQuery, [values], (error, elements) => {
      if (error) {
        return reject(error);
      }
      return resolve(elements);
    });
  });
};
const multipleSqlQueryPromise = (sqlQuery) => {
  const con = connectionMultipleQueries();
  return new Promise((resolve, reject) => {
    con.query(sqlQuery, (error, elements) => {
      if (error) {
        return reject(error);
      }
      return resolve(elements);
    });
  });
};
module.exports = {
  connection,
  sqlQueryPromise,
  multipleSqlQueryPromise,
  multipleRowsSqlQueryPromise,
};
