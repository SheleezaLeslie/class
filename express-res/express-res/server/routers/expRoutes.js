import { Router } from "express";
const router = Router();
import { getExperience } from "../controllers/expController.js";

router.get("/", getExperience);

export default router;
