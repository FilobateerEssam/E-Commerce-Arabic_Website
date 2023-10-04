// import category model
const slugify = require("slugify");
const asyncHandler = require("express-async-handler");

const ApiError = require("../utils/ApiError");
const { BrandModel } = require("../models/BrandModel");

// @desc Get List of Brands
// @route GET /api/v1/brands
// @access Public

exports.getBrands = asyncHandler(async (req, res) => {
  // Pagination

  const page = req.query.page * 1 || 1; // convert Query string to number
  const limit = req.query.limit * 1 || 3; // convert Query string to number

  const skip = (page - 1) * limit; // Equation for Data in Page Ex : page = 1 = (1-1) * 4 = 0

  //const categories = await CategoryModel.find({}).sort({ createdAt: -1 }); // sort by createdAt desc new to old ;

  const Brands = await BrandModel.find({}).skip(skip).limit(limit); // sort by createdAt desc new to old

  res.status(200).json({ results: Brands.length, page, data: Brands });
});

// @desc Get Specfic Brand
// @route GET /api/v1/brands/:id
// @access Public

exports.getSpecificBrand = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const brandId = await BrandModel.findById(id);

  if (!brandId) {
    // res.status(404).json({ message: `Category not found for this id ${id}` });
    return next(new ApiError(`Brand not found for this id ${id}`, 404));
  }

  res.status(200).json({ data: brandId });
});

// @desc Create with async await
// @route POST /api/v1/categories
// @access Private
exports.createBrand = asyncHandler(async (req, res , next) => {

  const {name} = req.body;

  // async await

  const brand = await BrandModel.create({ name, slug: slugify(name) });
  res
    .status(201)
    .json({ message: `Brand Created Successfilly`, data: brand });
});

// @desc Update Specfic brand
// @route PUT /api/v1/brands/:id
// @access private

exports.updateBrand = asyncHandler(async (req, res , next) => {
  // update category by id so we need id

  const { id } = req.params;

  // things that we need to update

  const {name} = req.body;

  // make update

  //                        update by id , update this data , return new data

  const brand = await BrandModel.findOneAndUpdate(
    { _id: id },
    { name, slug: slugify(name) },
    { new: true }
  ); // new : true to return new data after update not old data
  // _id that is id in database , id that is id in params , name that is name in body

  if (!brand) {
    // res.status(404).json({ message: `Category not found for this id ${id}` });
    return next(new ApiError(`Brand not found for this id ${id}`, 404));
  }

  res
    .status(200)
    .json({ message: `Brand Updated Successfilly`, data: brand });
});

// @desc Delete Specfic Brand
// @route DELETE /api/v1/brands/:id
// @access private

exports.deleteBrand = asyncHandler(async (req, res , next) => {
  // Delete category by id so we need id

  const { id } = req.params;

  // make delete

  const brand = await BrandModel.findByIdAndDelete(id);

  if (!brand) {
   // res.status(404).json({ message: `Category not found for this id ${id}` });
   return next(new ApiError(`brand not found for this id ${id}`, 404));

  }

  res.status(200).json({ message: `brand Deleted Successfilly` });
});

// Create Without async await
// exports.createCategory = (req, res) => {
//   const name = req.body.name;

//   CategoryModel.create({ name ,slug: slugify(name) })
//   .then(category => res.status(201).json({data: category}))
//   .catch((err) => res.status(400).send(err));

// }
