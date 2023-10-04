// import mongoose
const mongoose = require("mongoose");

// 1-Create Schema

const BrandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Brand name is required"],
      unique: [true, "Brand must be unique"],
      minlength: [3, "Too Short Brand"],
      maxlength: [50, "Too Long Brand"],
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


// 2-Create Model                      collection name , schema name

module.exports.BrandModel = mongoose.model("Brand", BrandSchema);
