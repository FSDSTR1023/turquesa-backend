const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const {token} = req.cookies;
  console.log(token, '********Token')
  if (!token) {
    return res.status(401).send({ error: "No token provided" });
  }

  try {
    const data = await jwt.verify(token, process.env.JWT_SECRET);
    if (!data) {
      return res.status(500);
    }
    req.user = data;
    next();
  } catch (err) {
    res.status(401).send({ error: err.message });
  }
};

module.exports = authMiddleware;