import express from "express";
import {pool} from "./utilidades/conexion.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get ('/ping', async (req, res) => {
    const [result] = await pool.query('SELECT 1 + 1 AS sum');
    res.json(result);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
