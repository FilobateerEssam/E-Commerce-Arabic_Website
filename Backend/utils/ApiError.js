/**
 @desc this class for handle errors that we will face in our application
 */



class ApiError extends Error {

  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true; // 
  }
}

module.exports = ApiError;