// import mongoose

const mongoose = require("mongoose");

// connect to DB

const dbConnection = () =>{

    mongoose
  .connect(process.env.DB_URI)
  .then((conn) => {
    console.log(`DB Connected ${conn.connection.host} 😎😎`);
  })
  .catch((err) => {
    console.error(`DB Error: ${err}`);
    process.exit(1);
  });

};

module.exports = dbConnection;