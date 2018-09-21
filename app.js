const express = require("express");
const morgan = require("morgan");
//const bodyParser = require("body-parser");
const html = require("html-template-tag");
const layout = require("./views/layout");
//what this line do?
const app = express();

//what this line do?
app.use(morgan("dev"));

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(layout(""));
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});