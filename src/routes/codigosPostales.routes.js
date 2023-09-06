import { Router } from "express";

const router = Router(); // router es un objeto de tipo Router

router.get("/codigos", (req, res) => {
    res.send("Hello World");
});


export default router; // Exportamos el objeto router para que pueda ser usado en otros archivos
