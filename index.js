const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let listItems = ["Buy Food", "Cook Food", "Eat Food"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let day = today.toLocaleDateString("en-US", options);

  res.render("list", { day, listItems });
});

app.post("/", (req, res) => {
  let item = req.body.newItem;

  listItems.push(item);

  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
