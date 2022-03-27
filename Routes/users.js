"use strict";

import express from "express";
import { v4 as uuidv4 } from "uuid";
import apicache from "apicache";
import humanRoutes from "./humanRoutes.js";

const router = express.Router();

let Persons = [
  // {
  //   firstName: "Santosh",
  //   lastName: "Sarkar",
  //   address: "Enfield",
  // },
];

let cache = apicache.middleware;
router.get("/", (req, res, next) => {
  //   console.log(Persons);
  res.status(200).json({
    message: "Here are all users requested",
    users: Persons,
  });
  //   res.send(Persons.filter((person) => person.firstName === req.body.firstName));
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  //   res.send(req.params);
  // console.log("in id" + id);
  const foundPerson = Persons.find((person) => person.userId === id);
  if (foundPerson) {
    res.status(200).json(foundPerson);
  } else {
    res.status(200).json({ message: `Person ${id} not found in database` });
  }
});

router.get("/:id/human", humanRoutes);

// router.get("/:id/human", (req, res) => {
//   console.log(Persons);
//   res.send(Persons);
//   //   res.send(Persons.filter((person) => person.firstName === req.body.firstName));
// });

router.post("/", (req, res, next) => {
  const newPerson = {
    userId: uuidv4(),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    address: req.body.address,
  };
  // console.log("in post");
  Persons.push(newPerson);
  // console.log(Persons);
  res.status(200).json({
    message: "here are all users",
    person: Persons,
  });
  //   res.send(Persons.filter((person) => person.firstName === req.body.firstName));
});

router.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  try {
    const isFound = Persons.find((person) => person.userId === id);
    if (isFound) {
      Persons = Persons.filter((person) => person.userId != id);
      // throw err;
      res.status(200).json({ message: `Persons ${id} deleted from database` });
    } else {
      res.status(404).json({ message: "Record not found" });
    }
  } catch {
    res.status(500).json({ message: "Serever error" });
  }
});

router.patch("/:id", (req, res, next) => {
  const { id } = req.params;
  const { firstName, lastName, address } = req.body;

  //this points to same memory location of the objects
  const Person = Persons.find((person) => person.userId === id);

  if (firstName) Person.firstName = firstName;
  if (lastName) Person.lastName = lastName;
  if (address) Person.address = address;

  res.status(200).json(Persons);
});

router.get("*", (req, res, next) => {
  // return res.status(404).json("bad path");
  console.log(req);
  res.status(400).json({ message: "bad get request" });
});

router.post("*", (req, res, next) => {
  // return res.status(404).json("bad path");
  // console.log(req);
  res.status(400).json({ message: "bad post request" });
});

export default router;
