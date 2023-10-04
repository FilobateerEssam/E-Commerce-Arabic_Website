// import category model
const slugify = require("slugify");
const asyncHandler = require("express-async-handler");

const CategoryModel = require("../models/categoryModel");
const ApiError = require("../utils/ApiError");

// @desc Get List of Categories
// @route GET /api/v1/categories
// @access Public
exports.getCategories = asyncHandler(async (req, res) => {
  // Pagination

  const page = req.query.page * 1 || 1; // convert Query string to number
  const limit = req.query.limit * 1 || 3; // convert Query string to number

  const skip = (page - 1) * limit; // Equation for Data in Page Ex : page = 1 = (1-1) * 4 = 0

  //const categories = await CategoryModel.find({}).sort({ createdAt: -1 }); // sort by createdAt desc new to old ;

  const categories = await CategoryModel.find({}).skip(skip).limit(limit); // sort by createdAt desc new to old

  res.status(200).json({ results: categories.length, page, data: categories });
});

// @desc Get Specfic Category
// @route GET /api/v1/categories/:id
// @access Public

exports.getSpecificCategory = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const categoryId = await CategoryModel.findById(id);

  if (!categoryId) {
    // res.status(404).json({ message: `Category not found for this id ${id}` });
    return next(new ApiError(`Category not found for this id ${id}`, 404));
  }

  res.status(200).json({ data: categoryId });
});

// @desc Create with async await
// @route POST /api/v1/categories
// @access Private
exports.createCategory = asyncHandler(async (req, res , next) => {
  const name = req.body.name;

  // async await

  const category = await CategoryModel.create({ name, slug: slugify(name) });
  res
    .status(201)
    .json({ message: `Category Created Successfilly`, data: category });
});

// @desc Update Specfic Category
// @route PUT /api/v1/categories/:id
// @access private

exports.updateCategory = asyncHandler(async (req, res , next) => {
  // update category by id so we need id

  const { id } = req.params;

  // things that we need to update

  const {name} = req.body;

  // make update

  //                        update by id , update this data , return new data

  const category = await CategoryModel.findOneAndUpdate(
    { _id: id },
    { name, slug: slugify(name) },
    { new: true }
  ); // new : true to return new data after update not old data
  // _id that is id in database , id that is id in params , name that is name in body

  if (!category) {
    // res.status(404).json({ message: `Category not found for this id ${id}` });
    return next(new ApiError(`Category not found for this id ${id}`, 404));
  }

  res
    .status(200)
    .json({ message: `Category Updated Successfilly`, data: category });
});

// @desc Delete Specfic Category
// @route DELETE /api/v1/categories/:id
// @access private

exports.deleteCategory = asyncHandler(async (req, res , next) => {
  // Delete category by id so we need id

  const { id } = req.params;

  // make delete

  const category = await CategoryModel.findByIdAndDelete(id);

  if (!category) {
   // res.status(404).json({ message: `Category not found for this id ${id}` });
   return next(new ApiError(`Category not found for this id ${id}`, 404));

  }

  res.status(200).json({ message: `Category Deleted Successfilly` });
});

// Create Without async await
// exports.createCategory = (req, res) => {
//   const name = req.body.name;

//   CategoryModel.create({ name ,slug: slugify(name) })
//   .then(category => res.status(201).json({data: category}))
//   .catch((err) => res.status(400).send(err));

// }
