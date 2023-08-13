const jwt = require("jsonwebtoken");
const sequelize = require("../models/sequelize");
const { Github_base_url } = require("../constants/constants");
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token === null) {
    return res.status(404).send({
      errorMessage: "Could not find a authorization token in the header.",
    });
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(404).send({
        errorMessage: "The authorization token is not correct",
      });
    }
    req.user = user;
    next();
  });
};

const isAuthenticated = (req, res, next) => {
  console.log(req.isAuthenticated());
  console.log(req.session);
  if (req.isAuthenticated()) {
    console.log("auth is good");
    next();
  } else {
    console.log("auth is not good");

    res.redirect("/login");
  }
};
const getAccessToken = async (req, res, next) => {
  const { user } = req;
  const userData = await sequelize.user.findByPk(user.id, {
    attributes: ["access_token"],
  });
  req.access_token = userData.dataValues.access_token;
  next();
};
const validate = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body);
    if (error) {
      console.log(error);
      console.log(JSON.stringify(error));
      return res.json(error);
    } else {
      next();
    }
  };
};
const validateParams = (req, res, next) => {
  if (err) {
    next(err); // Pass errors to Express.
  } else {
    res.send(data);
  }
};

const axiosOptionsGithub = (req, res, next) => {
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${req.access_token}`,
    },
    params: {
      sort: "created",
    },
  };
  req.options = options;
  req.base_url = Github_base_url;
  next();
};

module.exports = {
  authenticateToken,
  validate,
  validateParams,
  isAuthenticated,
  getAccessToken,
  axiosOptionsGithub,
};
