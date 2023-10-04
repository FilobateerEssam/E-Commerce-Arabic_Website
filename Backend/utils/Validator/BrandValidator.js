const { check } = require("express-validator");
const ValidatorMiddleware = require("../../Middlewares/ValidatorMiddleware");

// 1.Rules Validation

exports.getBrandValidator = [
  check("id").isMongoId().withMessage("Invalid Brand id"),
  ValidatorMiddleware,
];

exports.createBrandValidator = [
  check("name")
    .notEmpty()
    .withMessage("Brand name is required")
    .isLength({ min: 3, max: 50 })
    .withMessage("Brand name must be between 3 and 50 characters"),

  ValidatorMiddleware,
];

exports.updateBrandValidator = [
  check("id").isMongoId().withMessage("Invalid Brand id"),
  check("name")
    .optional()
    .isLength({ min: 3, max: 50 })
    .withMessage("Brand name must be between 3 and 50 characters"),
  ValidatorMiddleware,
];

exports.deleteBrandValidator = [
    check("id").isMongoId().withMessage("Invalid Brand id"),
    ValidatorMiddleware,
];