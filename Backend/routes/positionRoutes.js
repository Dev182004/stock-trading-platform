import express from "express";
import protect from "../middlewares/protect.js";
import { positions } from "../controllers/positionController.js";

const router = express.Router();

router.get("/", protect, positions);

export default router;