const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  console.log("Cookies", req.cookies);
  const token = req.cookies.tokenTurquesa;
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
    console.log("Aqui User: ", req.user);
    next();
  } catch (err) {
    res.status(401).send({ error: err.message });
  }
};

module.exports = authMiddleware;