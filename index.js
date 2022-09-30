const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const today = new Date();
  const currentDay = today.getDay();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  res.render("list", { day: days[currentDay] });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
