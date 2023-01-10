const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please enter the Email"],
      trim: true,
      unique: [true, "This email is already registered"],
    },
    password: {
      type: String,
      required: [true, "Please enter the Password"],
      min: 5,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("game-user", userSchema);

module.exports = User;
