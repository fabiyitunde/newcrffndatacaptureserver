import * as mongoose from "mongoose";
import { statetableSchema, lgatableSchema, titletableSchema } from "../models/parameters";
import { FreightForwaderCategory } from "../parameters"


const StateTable = mongoose.model("StateTable", statetableSchema);
const LGATable = mongoose.model("LGATable", lgatableSchema);
const TitleTable = mongoose.model("TitleTable", titletableSchema);

export const getStateList = async () => {
  return await StateTable.find().sort("description");
};

export const getLGAList = async (statecode: string) => {
  return await LGATable.find({ statecode: statecode }).sort("code");
};

export const getCategory = async (catid: number) => {
  // return Object.keys(FreightForwaderCategory)
  //       .filter(key => typeof FreightForwaderCategory[key] === 'number')
  //       .map(key => ({ id: FreightForwaderCategory[key], name: key }))
  ////return await LGATable.find().sort("description");
  return await FreightForwaderCategory.getDescription(catid);
};

export const getTitleList = async () => {
  return await TitleTable.find().sort("code");
};
