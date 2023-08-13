const axios = require("axios");
const dbAuth = require("../models/auth");
const dbUser = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const passport = require("../utils/passport"); // Import the Passport instance

const githubCallback = async (req, res) => {
  const { login, html_url, avatar_url } = req.user._json;
  let userId;

  // Find user
  const users = await dbUser.getUsers();
  const user = users.find((user) => user.username === login);
  if (!user) {
    // Create user
    console.log("cant find user");
    const response = await dbAuth.createUserOauth(login, html_url, avatar_url);
    console.log(response);
    console.log("created user");
    userId = response.insertId;
  } else {
    userId = user.id;
  }
  // Set jwt
  const jwtUser = { name: login, id: userId };
  const accessToken = jwt.sign(jwtUser, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "2h",
  });

  res.cookie(`jwt`, accessToken);
  res.cookie(`user_id`, userId);
  res.cookie(`username`, login);
  res.cookie(`avatar_url`, avatar_url);
  res.cookie(`github_url`, html_url);
  res.redirect(`http://localhost:5173/home`);
};
module.exports = {
  githubCallback,
};
