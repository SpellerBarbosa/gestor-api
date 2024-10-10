import { Router } from "express";
import indexController from "../controllers/indexController.js";
import loginController from "../controllers/loginController.js";
import verifyToken from "../middlewares/verifytoken.js";
import routerProtect from "../controllers/routeProtect.js";
import controllerCadastroEmpresa from "../controllers/contollerCadastroEmpresa.js";

const router = Router();

router.get("/", indexController);

router.post("/api/login", loginController);

router.get("/api/rota-protegida", verifyToken, routerProtect);

router.post("/api/cadastrar-empresas", controllerCadastroEmpresa);

export default router;