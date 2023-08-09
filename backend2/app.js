const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://localhost:19010/",
  })
);
app.use("/api", require("./routes"));
app.get("/healtcheck", (req, res) => res.send("Todo está bien"));

module.exports = app;
