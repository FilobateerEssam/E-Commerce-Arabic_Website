const { param, validationResult } = require("express-validator");



const ValidatorMiddleware = 

// 2. Middleware catch errors from Rules if exist

(req, res , next) => {

  // find the validation errors in this request and wrap them in an object with handy functions

  const errors = validationResult(req);

  if (!errors.isEmpty()) {

    // return res.status(400).json({ errors: errors.array() });

    return res.status(400).json({ errors: errors.array() });

  }
    // if no errors

    next();
}


module.exports = ValidatorMiddleware;