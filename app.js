"use strict";

import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import morgan from "morgan";
import userRoutes from "./Routes/users.js";
import userRoutesv2 from "./Routes/usersV2.js";
import countryRoutes from "./Routes/country.js";

//Intitialize express app
dotenv.config();
// console.log(process.env.PORT);
const app = express();
const PORT = process.env.PORT || 3000;

// app.use(cache("5 minutes"));
//Tell node that we are going to use json format
app.use(bodyParser.json());
app.use(morgan("dev"));
//setup CORS access

app.use((req, res, next) => {
  // res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Header", "*");
  res.header(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept, Authotization"
  );
  if (req.method === "OPTIONS") {
    // console.log("in options method");
    res.header("Access-Control-Allow-Method", "PUT,POST,PATCH,DELETE,GET");
    res.status(200).json({});
  }
  next();
});
//users Routes import
app.use("/v1/users", userRoutes);
app.use("/v2/users", userRoutesv2);

//country routes
app.use("/v1/country", countryRoutes);

app.get("/", (req, res, next) => {
  console.log(req.originalUrl);
  res.status(200).json({ message: "Hello from Rest API" });
});

app.get("*", (req, res, next) => {
  return res.status(404).json({ message: "bad API path" });
  // res.send("bad request");
});

app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);
