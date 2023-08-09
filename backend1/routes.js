const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/message", async (req, res) => {
  const messages = {
    msg01: "Hola desde backend1",
    msg02: "", // Esta línea puede ser eliminada ya que vas a reemplazarla con el valor de respuesta.
  };
  const path =
    process.env.SERVICE_BACKEND2 || "http://localhost:19020/api/message";

  try {
    const response = await axios.get(path);
    messages.msg02 = response.data.message; // Asignamos directamente el valor de respuesta.data a msg02
    res.json(messages);
  } catch (error) {
    console.error("Error al obtener el mensaje desde backend2:", error);
    res
      .status(500)
      .json({ error: "Error al obtener el mensaje desde backend2" });
  }
});

module.exports = router;
