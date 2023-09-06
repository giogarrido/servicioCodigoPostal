import {Router} from "express";

import {ping} from "../controllers/index.controller.js";

const router = Router(); // router es un objeto de tipo Router


router.get ('/ping', ping);

export default router; // Exportamos el objeto router para que pueda ser usado en otros archivos