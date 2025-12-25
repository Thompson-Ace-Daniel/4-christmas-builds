const errorHandler = (err, req, res, next) => {
  try {
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
      success: false,
      message: err.message || "Internal Server Error",
      stack: process.env.NODE_ENV === "development" ? err.stack : null,
    });
  } catch (err) {
    next(err);
  }
};

export default errorHandler;
