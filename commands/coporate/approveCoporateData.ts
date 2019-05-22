import { CoporateDataSchema } from "../../models/coporatedata";
import { dataCaptureRegistrationStatus } from "../../parameters";
import { raiseCoporateDataCaptureApprovedEvent } from "../../domainevents/coporateDataCaptureEvents";
import * as mongoose from "mongoose";
const CoporateData = mongoose.model("CoporateData", CoporateDataSchema);
export async function approveCoporateData(membershipnumber: string) {
  const existingrecordByMembershipNumber: any = await CoporateData.findOne({
    membershipnumber: membershipnumber
  });
  if (
    existingrecordByMembershipNumber.status !=
    dataCaptureRegistrationStatus.Submitted
  )
    throw "record No More Pending For Approval";

  await CoporateData.findOneAndUpdate(
    { membershipnumber: membershipnumber },
    { status: dataCaptureRegistrationStatus.Approved }
  );
  await raiseCoporateDataCaptureApprovedEvent(membershipnumber);
}
