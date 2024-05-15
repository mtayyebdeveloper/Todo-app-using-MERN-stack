// const TryCatch = (controller) => async (req, res, next) => {
//   try {
//     await controller(req, res, next);
//   } catch (error) {
//     return next(error);
//   }
// };

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

// Error handler function
const ErrorHandler = (err, req, res, next) => {
  console.error(err.stack);

  if (err instanceof CustomError) {
    return res.status(500).json({
      error: "Custom Error: Something went wrong",
    });
  } else if (err instanceof TypeError) {
    return res.status(400).json({ error: "Type Error: Bad request" });
  }

  return res.status(500).json({ error: "Internal Server Error" });
};

export { ErrorHandler };
