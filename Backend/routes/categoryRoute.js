// imports
const express = require("express");
const { param, validationResult } = require("express-validator");

const {
  getCategories,
  createCategory,
  getSpecificCategory,
  updateCategory,
  deleteCategory,
} = require("../services/categoryService");

const {
  getCategoryValidator,
  createCategoryValidator,
  updateCategoryValidator,
  deleteCategoryValidator,
} = require("../utils/Validator/CategoryValidator");

// Routes
// Import Routes For Reguest (Req) and Response (Res)

const router = express.Router();

// this is Equal that
// router.get("/", getCategories);
// router.post("/", createCategory);  So that is better

const subCategoryRouter = require("./subCategoryRoute");

router.use('/:categoryId/subcategories',subCategoryRouter );

router.route("/").get(getCategories).post(
  // validation
  createCategoryValidator,
  createCategory
);

router
  .route("/:id")
  // Specific Category

  .get(
    // validation

    getCategoryValidator,

    // business logic

    getSpecificCategory
  )

  // update Category

  .put(
    // validation
    updateCategoryValidator,

    updateCategory
  )

  // delete Category

  .delete(
    // validation
    deleteCategoryValidator,
    deleteCategory
  );

module.exports = router;
