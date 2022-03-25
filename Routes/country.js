import express from "express";

const router = express.Router();

let Country = [
  {
    countryId: "123",
    countryName: "India",
    code: "IND",
  },
  {
    countryId: "124",
    countryName: "United States of America",
    code: "USA",
  },
];

router.get("/", (req, res) => {
  //   console.log(Persons);
  res.send(Country.filter((country) => country.code === req.body.code));
});

router.post("/", (req, res) => {
  //   if (req.body.countryName === null) {
  //     res.send("No data in body for country");
  //   }
  let newCountry = {
    countryId: "125",
    countryName: req.body.countryName,
    code: req.body.code,
  };
  Country.push(newCountry);
  res.send(Country);
});

export default router;
