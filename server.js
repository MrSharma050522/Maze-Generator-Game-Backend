const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const userRouter = require("./routes/userRoute");
const scoreRouter = require("./routes/scoreRoute");

dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "HOME",
  });
});

app.use("/user", userRouter);
app.use("/score", scoreRouter);

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DB Connection Successfull");
    app.listen(process.env.PORT, () => {
      console.log(`Listening to port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
