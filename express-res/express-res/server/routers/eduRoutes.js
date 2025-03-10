import { Router } from "express";
const router = Router();
import { getEducation } from "../controllers/eduController.js";

router.get("/", getEducation);

export default router;
