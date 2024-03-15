const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from the server");
});

app.get("/cars", (req, res) => {
  res.send("This is for cars");
});

app.get("/fruits", (req, res) => {
  res.send("This is for fruits");
});

app.listen(8000, () => {
  console.log("Server connected successfully");
});
