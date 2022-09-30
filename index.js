const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", (req, res) => {
  const today = new Date();
  const currentDay = today.getDay();

  if (currentDay === 6 || currentDay === 0) {
    res.write("<h1>Have a good weekend!</h1>");
  } else {
    res.sendFile(__dirname + "/index.html");
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
