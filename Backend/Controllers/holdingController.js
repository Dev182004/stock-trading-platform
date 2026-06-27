
import {HoldingsModel} from "../models/HoldingsModel.js";

export const holdings = async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
};