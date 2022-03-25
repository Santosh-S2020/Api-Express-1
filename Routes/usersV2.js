"use strict";

import express from "express";
import { v4 as uuidv4 } from "uuid";
import humanRoutes from "./humanRoutes.js";

const router = express.Router();

let Persons = [{ firstName: "Santosh", age: 24 }];

router.get("/", (req, res) => {
  //   console.log(Persons);
  res.send(Persons);
  //   res.send(Persons.filter((person) => person.firstName === req.body.firstName));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  //   res.send(req.params);
  res.send(Persons.find((person) => person.userId === id));
});

router.get("/:id/human", humanRoutes);

// router.get("/:id/human", (req, res) => {
//   console.log(Persons);
//   res.send(Persons);
//   //   res.send(Persons.filter((person) => person.firstName === req.body.firstName));
// });

router.post("/", (req, res) => {
  const newPerson = {
    userId: uuidv4(),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    address: req.body.address,
  };
  Persons.push(newPerson);
  res.send(Persons);
  //   res.send(Persons.filter((person) => person.firstName === req.body.firstName));
});

router.delete("/:id", (req, res) => {
  req.params;
  const { id } = req.params;
  Persons = Persons.filter((person) => person.userId != id);
  res.send(Persons);
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, address } = req.body;

  //this points to same memory location of the objects
  const Person = Persons.find((person) => person.userId === id);

  if (firstName) Person.firstName = firstName;
  if (lastName) Person.lastName = lastName;
  if (address) Person.address = address;

  res.send(Persons);
});

export default router;
