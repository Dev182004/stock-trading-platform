import express from "express";
import protect from "../middlewares/protect.js";
import { holdings } from "../Controllers/holdingController.js";

const router = express.Router();

router.get("/", protect, holdings);

export default router;