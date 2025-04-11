import {Router} from "express";
import * as authControllers from "../controllers/auth.controller.js"; 

const router = Router();

// console.log(authControllers);

router.get("/register", authControllers.getRegisterPage);
router.get("/login", authControllers.getLoginPage);

export const authRoutes = router;