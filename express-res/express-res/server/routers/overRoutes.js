import { Router } from "express";
const router = Router();
import { getOverview } from "../controllers/overController.js";

router.get("/", getOverview);

export default router;
