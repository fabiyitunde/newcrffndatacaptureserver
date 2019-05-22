import * as mongoose from "mongoose";
import { statetableSchema } from "../models/parameters";

const StateTable = mongoose.model("StateTable", statetableSchema);

export const getStateList = async () => {
  return await StateTable.find().sort("description");
};
