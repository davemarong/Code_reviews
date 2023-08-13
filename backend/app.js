require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");

const passport = require("./utils/passport");

const mentorRouter = require("./routes/mentor/mentor");
const postRouter = require("./routes/post");
const postSubjectRouter = require("./routes/lk_post_subject");
const userRouter = require("./routes/user/user");
const authRouter = require("./routes/auth/auth");
const githubRouter = require("./routes/github");
const reviewRouter = require("./routes/review");
const voteRouter = require("./routes/vote");
const port = 3000;

app.use(
  session({
    secret: "jdshfkjdshfjkshnjkfsndjkfdbnfkbfhdsfdhb",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
app.use(express.json());

app.use("/mentor", mentorRouter);
app.use("/post", postRouter);
app.use("/lk_post_subject", postSubjectRouter);
app.use("/user", userRouter);
app.use("/review", reviewRouter);
app.use("/vote", voteRouter);
app.use("/auth", authRouter);
app.use("/github", githubRouter);
// app.get("/github/repos", (req, res) => {
//   console.log(req.isAuthenticated());
// });
app.listen(port, () => {
  console.log("Listening on port " + port);
});
