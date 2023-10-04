const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: [true, "Subcategory must be unique"],
      minlength: [3, "To short subcategory name"],
      maxlength: [50, "To long subcategory name"],
    },
    slug: {
      type: String,
      lowercase: true,
    },
    // foriegn key to category
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "Parent category is required"],
    },

  },
  { 
    timestamps: true ,
 }
);

module.exports = mongoose.model("SubCategory", subCategorySchema);