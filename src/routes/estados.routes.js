import { Router } from "express";
import { getEstados, getEstado, getEstadoByNombre } from "../controllers/estados.controller.js";


const router = Router(); // router es un objeto de tipo Router

router.get("/estados", getEstados);
router.get("/estados/:id", getEstado);
router.get("/estados/nombre/:nombre", getEstadoByNombre);

export default router; // Exportamos el objeto router para que pueda ser usado en otros archivos