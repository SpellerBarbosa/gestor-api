import { Router } from "express";
import indexController from "../controllers/indexController.js";
import loginController from "../controllers/loginController.js";

const router = Router();

router.get("/", indexController);

router.post("/api/login", loginController);

export default router;