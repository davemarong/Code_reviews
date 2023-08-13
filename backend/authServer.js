require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./routes/user/user");
const authRouter = require("./routes/auth/auth");
const port = 4000;

app.use(cors());
app.use(express.json());

// ROUTES
app.use("/user", userRouter);
app.use("/auth", authRouter);

app.listen(port, () => {
  console.log("Listening on port " + port);
});
