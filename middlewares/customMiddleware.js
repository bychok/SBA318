const customMiddleware = (req, res, next) => {
  console.log("Custom Middleware Called");
  next();
};

module.exports = customMiddleware;
