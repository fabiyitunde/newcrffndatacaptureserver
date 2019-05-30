import { IndividualDataSchema } from "../models/individualdata";
import { dataCaptureRegistrationStatus } from "../parameters";
import * as mongoose from "mongoose";

const IndividualData = mongoose.model("IndividualData", IndividualDataSchema);

export const getIndividualDataByCRFFNNumber = async (
  membershipnumber: string
) => {
  var existingrec: any = await IndividualData.findOne({
    membershipnumber: membershipnumber
  });
  return existingrec;
};

export const getUnSubmittedIndividualDataList = async () => {
  var existinglist: any = await IndividualData.find({
    status: dataCaptureRegistrationStatus.Pending
  });
  return existinglist;
};
export const getUnApprovedIndividualDataList = async () => {
  var existinglist: any = await IndividualData.find({
    status: dataCaptureRegistrationStatus.Submitted
  });
  return existinglist;
};
