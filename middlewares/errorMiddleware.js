const errorMiddleware = (err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).send("Server Error");
};

module.exports = errorMiddleware;
