// imports 
const express = require("express");

const { getCategories ,createCategory, getSpecificCategory, updateCategory, deleteCategory } = require("../services/categoryService");

// Routes
// Import Routes For Reguest (Req) and Response (Res)

const router = express.Router();

// this is Equal that 
// router.get("/", getCategories);
// router.post("/", createCategory);  So that is better

router.route("/").get(getCategories).post(createCategory);

// Specific Category
 router.get("/:id", getSpecificCategory);

 // update Category

 router.put("/:id", updateCategory);

 // delete Category

 router.delete("/:id", deleteCategory);


module.exports = router;