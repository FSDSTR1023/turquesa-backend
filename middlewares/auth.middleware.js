const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    res.status(401).send({ error: "No token provided" });
    return;
  }

  try {
    const data = await jwt.verify(token, process.env.JWT_SECRET);
    if (!data) {
      res.status(500);
      return;
    }
    req.user = data;
    next();
  } catch (err) {
    res.status(401).send({ error: err.message });
  }
};

module.exports = authMiddleware;