const express = require("express");
const countriesData = require("./countries.json");
const app = express();

app.get("/", (req, res) => {
  res.send(countriesData);
});

app.listen(3005, () => {
  console.log("Server Running on Port 3005");
});
