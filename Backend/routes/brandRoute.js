// imports
const express = require("express");

const {
  getBrands,
  createBrand,
  getSpecificBrand,
  updateBrand,
  deleteBrand,
} = require("../services/BrandService");

const {
  getBrandValidator,
  createBrandValidator,
  updateBrandValidator,
  deleteBrandValidator,
} = require("../utils/Validator/BrandValidator");

// Routes
// Import Routes For Reguest (Req) and Response (Res)

const router = express.Router();

// this is Equal that
// router.get("/", getCategories);
// router.post("/", createCategory);  So that is better


router.route("/").get(getBrands).post(
  // validation
  createBrandValidator,
  createBrand
);

router
  .route("/:id")
  // Specific Category

  .get(
    // validation

    getBrandValidator,

    // business logic

    getSpecificBrand
  )

  // update Category

  .put(
    // validation
    updateBrandValidator,

    updateBrand
  )

  // delete Category

  .delete(
    // validation
    deleteBrandValidator,
    deleteBrand
  );

module.exports = router;
