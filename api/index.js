const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();

app.listen("5001", ()=>{
       console.log("Backend server is running");
})