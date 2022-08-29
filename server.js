//declare variables
const express = require("express");
const app = express();
const mongoose = require("mongoose");
//database connection
const connectDB = require("./config/database");

//routes folder variable telling code to look in the routes folder and use the home file
const homeRoutes = require("./routes/home");
const listRoutes = require("./routes/list");
//dotenv path
require("dotenv").config({ path: "./config/.env" });
//call database
connectDB();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//setting routes to be used- "/" look inside home directory follow directions declared in homeroutes variable
app.use("/", homeRoutes);
app.use("/list", listRoutes);
//server
app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
