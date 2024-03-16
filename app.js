const { error } = require("console");
const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
  // We will read file over here!

  fs.readFile("./data.txt", "utf-8", (err, data) => {
    if (err) res.send("There was an error accessing the file");
    res.send(data);
  });

  // res.send("Hello from the server");
});

app.get("/write", (req, res) => {
  fs.appendFile("./data.txt", "\nCherry", (err) => {
    if (err) res.send("Error Writin to File!");
    res.send("Data Written Successfully");
  });

  // res.send("This is for fruits")
});

app.get("/fruits", (req, res) => {
  res.send("This is for fruits");
});

app.listen(8000, () => {
  console.log("Server connected successfully");
});
