import { CoporateDataSchema } from "../models/coporatedata";
import { dataCaptureRegistrationStatus } from "../parameters";
import * as mongoose from "mongoose";

const CoporateData = mongoose.model("CoporateData", CoporateDataSchema);

export const getCoporateDataByCRFFNNumber = async (membershipnumber: string) => {
  var existingrec: any = await CoporateData.findOne({
    membershipnumber: membershipnumber
  });
  return existingrec;
};

export const getCoporateDataById = async (id: string) => {
  var existingrec: any = await CoporateData.findOne({
    _id: id
  });
  return existingrec;
};

export const getUnSubmittedCoporateDataList = async (userid: string) => {
  var existinglist: any = await CoporateData.find({
    status: dataCaptureRegistrationStatus.Pending,
    userid: userid
  });
  return existinglist;
};
export const getUnApprovedCoporateDataList = async () => {
  var existinglist: any = await CoporateData.find({
    status: dataCaptureRegistrationStatus.Submitted
  });
  return existinglist;
};
