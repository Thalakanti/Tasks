const jwt = require("jsonwebtoken");
secretkey = "Telugu";
function authorize(req, res, next) {
  const token = req.header("authorization");

  if (!token) {
    res.status(401).json({
      success: false,
      message: "Token Not Found",
    });
  }
  try {
    const decoded = jwt.verify(token, secretkey);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Invalid token",
    });
  }
}

module.exports = { authorize };
