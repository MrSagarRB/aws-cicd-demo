const express = require("express");
const countriesData = require("./countries.json");
const app = express();

app.get("/", (req, res) => {
  res.send(countriesData);
});

app.get("/home", (req, res) => {
  res.send("home-page");
});

app.listen(3005, () => {
  console.log("Server Running on Port 3005");
});
