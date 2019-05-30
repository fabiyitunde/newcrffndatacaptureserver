import * as mongoose from "mongoose";
import { statetableSchema, lgatableSchema } from "../models/parameters";

const StateTable = mongoose.model("StateTable", statetableSchema);
const LGATable = mongoose.model("LGATable", lgatableSchema);

export const getStateList = async () => {
  return await StateTable.find().sort("description");
};

export const getLGAList = async () => {
  return await LGATable.find().sort("description");
};
