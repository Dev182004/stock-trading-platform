import {PositionsModel} from "../models/PositionsModel.js"
export const positions = async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
};