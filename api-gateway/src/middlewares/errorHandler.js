const errorHandler = (err, req, res, next) => {
  console.error(err.message);

  res.status(err.response?.status || 500).json({
    message: err.response?.data || "Gateway Error",
  });
};

module.exports = errorHandler;