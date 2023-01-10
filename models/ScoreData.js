const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema(
  {
    player: {
      type: String,
      required: [true, "Please provide player name"],
      trim: true,
    },
    score: {
      type: Number,
      required: [true, "Please provide Score"],
      trim: true,
    },
  },
  { timestamps: true }
);

const ScoreData = mongoose.model("score", scoreSchema);

module.exports = ScoreData;
