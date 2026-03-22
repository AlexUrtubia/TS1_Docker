const express = require("express");
const { Pool } = require("pg");

const app = express();
const port = 3000;

app.use(express.json());

const cors = require("cors");
app.use(cors());

// conexión a DB usando variables de entorno
const pool = new Pool({
  host: process.env.DB_HOST || "db",
  user: "user",
  password: "password",
  database: "appdb",
  port: 5432,
});

// endpoint base
app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

// endpoint que consulta la DB
app.get("/data", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows);
  } catch (error) {
    console.error("Error conectando a DB:", error.message);
    res.status(500).send("DB no disponible aún");
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});