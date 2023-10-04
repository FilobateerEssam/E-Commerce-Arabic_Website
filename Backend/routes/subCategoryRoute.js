// imports
const express = require("express");
const { param, validationResult } = require("express-validator");

// Routes
// Import Routes For Reguest (Req) and Response (Res)

// merge params allows us to access parameters on all routers
// ex: we need to access category Id from category router

const router = express.Router({mergeParams: true});

const {
  createsubCategory,
  getsubCategories,
  getSpecificsubCategory,
  updatesubCategory,
  deletesubCategory,
  setCategoryIdToBody,
  createFilterObject,
} = require("../services/subCategoryService");
const {
  createsubCategoryValidator,
  getsubCategoryValidator,
  updatesubCategoryValidator,
  deletesubCategoryValidator,
} = require("../utils/Validator/subCategoryValidator");


router
  .route("/")
  .post(
    // validation
    setCategoryIdToBody,
    createsubCategoryValidator,
    createsubCategory
  )

  .get(createFilterObject,getsubCategories);

router
  .route("/:id")

  // Specific subCategory

  .get(
    // validation
    getsubCategoryValidator,
    getSpecificsubCategory
  )

  .put(
    // validation
    updatesubCategoryValidator,
    updatesubCategory
  )

  .delete(
    // validation
    deletesubCategoryValidator,
    deletesubCategory
  );
module.exports = router;
