const express = require("express");
const router = express.Router();
//const axios = require("axios");

router.get("/message", (req, res) => {
  const messages = {
    message: "Hola desde backend2"
  };
  res.json(messages);
});

module.exports = router;
