// passport.js
const dbAuth = require("../models/auth");

const passport = require("passport");
const GitHubStrategy = require("passport-github").Strategy;
require("dotenv").config();

// Configure Passport.js
passport.serializeUser(function (user, done) {
  done(null, { userId: 1, username: "dave" });
});

passport.deserializeUser(function (user, done) {
  done(null, { userId: 1, username: "dave" });
});

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/github/callback",
      scope: ["user", "public_repo"],
    },
    async function (accessToken, refreshToken, profile, done) {
      await dbAuth.insertAccessToken(accessToken, profile._json.login);

      console.log(profile._json.login);
      return done(null, profile, accessToken);
    }
  )
);

module.exports = passport;
