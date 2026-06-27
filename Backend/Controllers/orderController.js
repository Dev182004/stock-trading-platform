import {OrdersModel} from "../models/OrdersModel.js";

export const orders = async (req, res) => {
  let allOrders = await OrdersModel.find({});
  res.json(allOrders);
};

export const newOrder = async (req, res) => {
    
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  await newOrder.save();
  res.send("Order saved");
};