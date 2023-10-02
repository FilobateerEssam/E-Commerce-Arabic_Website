const { check } = require("express-validator");
const ValidatorMiddleware = require("../../Middlewares/ValidatorMiddleware");

// 1.Rules Validation

exports.getCategoryValidator = [
  check("id").isMongoId().withMessage("Invalid category id"),
  ValidatorMiddleware,
];

exports.createCategoryValidator = [
  check("name")
    .notEmpty()
    .withMessage("Category name is required")
    .isLength({ min: 3, max: 50 })
    .withMessage("Category name must be between 3 and 50 characters"),

  ValidatorMiddleware,
];

exports.updateCategoryValidator = [
  check("id").isMongoId().withMessage("Invalid category id"),
  check("name")
    .optional()
    .isLength({ min: 3, max: 50 })
    .withMessage("Category name must be between 3 and 50 characters"),
  ValidatorMiddleware,
];

exports.deleteCategoryValidator = [
    check("id").isMongoId().withMessage("Invalid category id"),
    ValidatorMiddleware,
];