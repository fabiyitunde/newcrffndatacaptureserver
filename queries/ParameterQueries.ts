import * as mongoose from "mongoose";
import { statetableSchema, lgatableSchema } from "../models/parameters";
import {FreightForwaderCategory} from "../parameters"


const StateTable = mongoose.model("StateTable", statetableSchema);
const LGATable = mongoose.model("LGATable", lgatableSchema);

export const getStateList = async () => {
  return await StateTable.find().sort("description");
};

export const getLGAList = async () => {
  return await LGATable.find().sort("description");
};

export const getCategory = async (catid: number) => {
  // return Object.keys(FreightForwaderCategory)
  //       .filter(key => typeof FreightForwaderCategory[key] === 'number')
  //       .map(key => ({ id: FreightForwaderCategory[key], name: key }))
  ////return await LGATable.find().sort("description");
  return await FreightForwaderCategory.getDescription(catid);
};
