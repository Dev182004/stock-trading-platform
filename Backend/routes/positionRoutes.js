import express from "express";
import protect from "../middlewares/protect.js";
import { positions } from "../Controllers/positionController.js";

const router = express.Router();

router.get("/", protect, positions);

export default router;