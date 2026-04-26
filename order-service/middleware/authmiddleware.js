const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    let token = req.cookies?.token;

    if (!token && req.headers.authorization) {
      if (req.headers.authorization.startsWith("Bearer ")) {
        token = req.headers.authorization.split(" ")[1];
      }
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: Token missing",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = {
      id: decoded.id,
      role: decoded.role,
      name: decoded.name,
      email: decoded.email,
      phone: decoded.phone,
    };
    next();
  } catch (error) {
    console.error("Auth Error:", error.message);

    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Session expired, please login again",
      });
    }

    // 🔥 Invalid token
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};

module.exports = auth;