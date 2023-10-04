const { check } = require("express-validator");
const ValidatorMiddleware = require("../../Middlewares/ValidatorMiddleware");

// 1.Rules Validation

exports.getsubCategoryValidator = [
  check("id").isMongoId().withMessage("Invalid subCategory id"),
  ValidatorMiddleware,
];

exports.createsubCategoryValidator = [
  check("name")
    .notEmpty()
    .withMessage("subCategory name is required")
    .isLength({ min: 3, max: 50 })
    .withMessage("subCategory name must be between 3 and 50 characters"),

    check("category")
    .notEmpty().withMessage("category ID is required")
    .isMongoId().withMessage("Invalid category Id"),

  ValidatorMiddleware,
];

exports.updatesubCategoryValidator = [
  check("id").isMongoId().withMessage("Invalid subCategory id"),
  check("name")
    .optional()
    .isLength({ min: 3, max: 50 })
    .withMessage("subCategory name must be between 3 and 50 characters"),
  check("category")
  .optional().notEmpty().withMessage("category ID must be Entered or leave it without change"),
  ValidatorMiddleware,
];

exports.deletesubCategoryValidator = [
    check("id").isMongoId().withMessage("Invalid subCategory id"),
    ValidatorMiddleware,
];