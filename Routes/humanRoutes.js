"use strict";

import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

let Persons = [
  {
    firstName: "Santosh",
  },
];

// console.log("in human");
router.get("/:id/human", (req, res) => {
  // console.log(req);
  res.send(Persons);
  //   res.send(Persons.filter((person) => person.firstName === req.body.firstName));
});

export default router;
