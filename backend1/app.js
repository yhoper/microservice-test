const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use("/api", require("./routes"));
app.get("/healtcheck", (req, res) => res.send("Todo está bien"));

module.exports = app;
