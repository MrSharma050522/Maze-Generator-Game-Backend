const express = require("express");
const authPlayer = require("../middleware/authPlayer");
const ScoreData = require("../models/ScoreData");

const router = express.Router();

router.post("/addscore", async (req, res) => {
  try {
    const { player, score } = req.body;
    const scoreData = await ScoreData.create({ player, score });

    res.status(201).json({
      status: "succes",
      scoreData,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
});

router.get("/allscore", async (req, res) => {
  try {
    const scores = await ScoreData.find({});

    res.status(200).json({
      status: "success",
      scores,
    });
  } catch (err) {
    res.status(200).json({
      status: "fail",
      message: err.message,
    });
  }
});

module.exports = router;
