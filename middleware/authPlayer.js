const jwt = require("jsonwebtoken");

const authPlayer = (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.status(400).json({
        status: "fail",
        message: "Please provide token",
      });
    }

    const verifiedPlayer = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!verifiedPlayer) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid token",
      });
    }

    req.userId = verifiedPlayer.id;
    next();
  } catch (err) {
    res.status(500).json({
      stauts: "fail",
      message: "Please provide token",
    });
  }
};

module.exports = authPlayer;
