const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const {tokenTurquesa} = req.cookies;
  console.log(tokenTurquesa, '********Token')
  if (!tokenTurquesa) {
    return res.status(401).send({ error: "No token provided" });
  }

  try {
    const data = await jwt.verify(tokenTurquesa, process.env.JWT_SECRET);
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