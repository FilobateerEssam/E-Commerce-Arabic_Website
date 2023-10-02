const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
dotenv.config({ path: "config.env" });
const dbConnection = require("./config/database");
const categoryRoute = require("./routes/categoryRoute");

const ApiError = require("./utils/ApiError");
const globalError = require("./Middlewares/errorMiddleware");

// Connect to DB
dbConnection();

// Express App
const app = express();

// Use Middlewares

//Before Routes

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`Mode: ${process.env.NODE_ENV} `);
}
else{
  app.use(morgan("prod"))
}

// Mount Routes
app.use("/api/v1/categories", categoryRoute);

// if we use this route that not exist in our application
app.all("*", (req, res, next) => {
  // create new error & send it to error handler middleware

  // const err = new Error(`Can't find this route : ${req.originalUrl} on this server`);
  // next(err.message);

  next(
    new ApiError(
      `Can't find this route : ${req.originalUrl} on this server`,
      400
    )
  );
  
});

// Global Error Handler
app.use(globalError);

const PORT = process.env.PORT || 8000;
// Localhost:8000 and Server is running
const server = app.listen(PORT, () => {
  console.log(`server App is running on port ${PORT}`);
});

// Handle Rejection Errors Outside Express App which back from Async 
// Events => list => callback(err) Async
// 1- Unhandled Rejection Errors Outside Express App

process.on("unhandledRejection", (err) => {
  
  console.error(`unhandledRejection Errors: ${err}`);
  server.close(() => {
    console.error(`Shutting down .........`)

    process.exit(1);
  }); 
});