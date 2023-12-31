// import mongoose
const mongoose = require("mongoose");

// 1-Create Schema

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Category name is required"],
      unique: [true, "Category must be unique"],
      minlength: [3, "Too Short Category"],
      maxlength: [50, "Too Long Category"],
    },
    // A and B => shopping.com/a-and-b
    slug: {
      type: String,
      lowercase: true,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true } // createdAt, updatedAt
);

// populate the subcategory for category

// can be any name but use that name in populate
categorySchema.virtual("subcategories", {
  ref: "SubCategory",
  foreignField: "category",
  localField: "_id",
});

// 2-Create Model                      collection name , schema name

const CategoryModel = mongoose.model("Category", categorySchema);

module.exports = CategoryModel;
