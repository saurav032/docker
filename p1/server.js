const express = require("express");
const app = express();

const port = 3000;

app.get("/versions", (req, res) => {
  res.send(process.versions);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log("Server started on port " + port);
});
