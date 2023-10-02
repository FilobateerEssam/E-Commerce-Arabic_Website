const globalError = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  // if we are in development mode send error for developer
  if (process.env.NODE_ENV === "development") {
      
      sendErrorForDev(err, res);
  }
  else {
    sendErrorForProd(err, res);
  }

};

// send error for development Mode 
const sendErrorForDev = (err, res) => {
 return res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message ,
    stack: err.stack, // where is the error
  });
};

// send error for production Mode
const sendErrorForProd = (err, res) => {
  return res.status(err.statusCode).json({
     status: err.status,
     message: err.message ,
   });
 };
module.exports = globalError;
