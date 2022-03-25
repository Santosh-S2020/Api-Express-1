"use strict";

import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./Routes/users.js";
import countryRoutes from "./Routes/country.js";
import humanRoutes from "./Routes/humanRoutes.js";

//Intitialize express app
const app = express();
const PORT = 3000;

//Tell node that we are going to use json format
app.use(bodyParser.json());

//users Routes import
app.use("/users", userRoutes);

app.use("/users/human", humanRoutes);

//country routes
app.use("/country", countryRoutes);

app.get("/", (req, res) => {
  console.log("get route");
  res.send("Hello from Rest API");
});

app.get("*", (req, res) => {
  res.sendStatus(400);
});

app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);
