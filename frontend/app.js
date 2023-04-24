const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use("/", express.static(path.join(__dirname + "/public")));
app.use("/api", require("./routes"));
app.get("/healtcheck", (req, res) => res.send("Todo está bien"));
app.get("*", (req, res) => res.sendFile(__dirname + "/public/index.html"));

module.exports = app;