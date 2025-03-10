import { Router } from "express";
const router = Router();
import { getSkills } from "../controllers/skillController.js";

router.get("/", getSkills);

export default router;