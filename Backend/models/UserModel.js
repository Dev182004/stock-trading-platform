import mongoose from "mongoose";
import { UserSchema } from "../schemas/UserSchema.js";

const UserModel = mongoose.model("user", UserSchema);

export { UserModel };