// import category model
const slugify = require("slugify");
const asyncHandler = require("express-async-handler");
const ApiError = require("../utils/ApiError");
const subCategoryModel = require("../models/subCategoryModel");

exports.setCategoryIdToBody = (req, res, next) => {
  // Nested Route
  if (!req.body.category) {
    req.body.category = req.params.categoryId;
    console.log(req.body.category);
    next();
  }
};

// @desc Create subCategory
// @route POST /api/v1/subCategory
// @access Private
exports.createsubCategory = asyncHandler(async (req, res, next) => {
  const { name, category } = req.body;

  // check subcategory name is exist or not

  const existslug = await subCategoryModel.findOne({ slug: slugify(name) });

  if (existslug) {
    return next(new ApiError(`subCategory ${name}  already exist`, 400));
  }

  // async await

  const subCategory = await subCategoryModel.create({
    name,
    slug: slugify(name),
    category,
  });
  res.status(201).json({
    message: `subCategory ${name} Created Successfilly`,
    data: subCategory,
  });
});

// Nested route

// GET /api/v1/categories/:categoryId/subcategories

exports.createFilterObject = (req, res, next) => {
  let filterObject = {};

  if (req.params.categoryId) filterObject = { category: req.params.categoryId };
  req.filterObj = filterObject;

  next();
};

// @desc Get List of subCategories
// @route GET /api/v1/subCategory
// @access Public
exports.getsubCategories = asyncHandler(async (req, res) => {
  // Pagination

  const page = req.query.page * 1 || 1; // convert Query string to number
  const limit = req.query.limit * 1 || 3; // convert Query string to number

  const skip = (page - 1) * limit; // Equation for Data in Page Ex : page = 1 = (1-1) * 4 = 0

  //const categories = await CategoryModel.find({}).sort({ createdAt: -1 }); // sort by createdAt desc new to old ;

  const subcategories = await subCategoryModel
    .find(req.filterObj)
    .skip(skip)
    .limit(limit) // sort by createdAt desc new to old
    .populate("category", "name");

  res
    .status(200)
    .json({ results: subcategories.length, page, data: subcategories });
});

// @desc Get Specfic subCategory
// @route GET /api/v1/subCategory/:id
// @access Public

exports.getSpecificsubCategory = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const subCategoryId = await subCategoryModel
    .findById(id)
    .populate("category", "name");

  if (!subCategoryId) {
    return next(new ApiError(`subCategory not found for this id ${id}`, 404));
  }

  res.status(200).json({ data: subCategoryId });
});

// @desc Update Specfic subCategory
// @route PUT /api/v1/subCategory/:id
// @access private

exports.updatesubCategory = asyncHandler(async (req, res, next) => {
  // update subcategory by id so we need id

  const { id } = req.params;

  // things that we need to update

  const { name, category } = req.body;

  // make update

  //                        update by id , update this data , return new data

  const subcategory = await subCategoryModel
    .findOneAndUpdate(
      { _id: id },
      { name, slug: slugify(name), category },
      { new: true }
    )
    .populate("category", "name");

  // new : true to return new data after update not old data
  // _id that is id in database , id that is id in params , name that is name in body

  if (!subcategory) {
    // res.status(404).json({ message: `Category not found for this id ${id}` });
    return next(new ApiError(`subCategory not found for this id ${id}`, 404));
  }

  res
    .status(200)
    .json({ message: `subCategory Updated Successfilly`, data: subcategory });
});

// @desc Delete Specfic subcategory
// @route DELETE /api/v1/subCategory/:id
// @access private

exports.deletesubCategory = asyncHandler(async (req, res, next) => {
  // Delete category by id so we need id

  const { id } = req.params;

  // make delete

  const subcategory = await subCategoryModel.findByIdAndDelete(id);

  if (!subcategory) {
    // res.status(404).json({ message: `Category not found for this id ${id}` });
    return next(new ApiError(`subCategory not found for this id ${id}`, 404));
  }

  res.status(200).json({ message: `subCategory Deleted Successfilly` });
});
