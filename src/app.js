import express from "express";
import codigosPostalesRoutes from "./routes/codigosPostales.routes.js"; // Importamos el objeto router desde codigosPostales.router.js
import indexRoutes from "./routes/index.routes.js"; // Importamos el objeto router desde index.router.js
import estadosRoutes from "./routes/estados.routes.js"; // Importamos el objeto router desde estados.router.js
const app = express();

app.use(express.json()); // Para que nuestro servidor entienda los formatos json

app.use(indexRoutes); // Usamos el objeto router en la ruta / (raíz
app.use(codigosPostalesRoutes); // Usamos el objeto router en la ruta /codigosPostales
app.use("/api", estadosRoutes); // Usamos el objeto router en la ruta /estados

app.use((req, res) => {
  res.status(404).json({ message: "endpoint not found" });
});

export default app;
