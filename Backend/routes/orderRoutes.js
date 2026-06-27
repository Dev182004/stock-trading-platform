import express from "express";
import protect from "../middlewares/protect.js";
import {
  orders,
  newOrder,
} from "../Controllers/orderController.js";

const router = express.Router();

router.get("/allOrders", protect, orders);
router.post("/newOrder", protect, newOrder);

export default router;