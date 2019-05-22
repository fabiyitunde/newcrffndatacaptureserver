import { CoporateDataSchema } from "../../models/coporatedata";
import { dataCaptureRegistrationStatus } from "../../parameters";
import * as mongoose from "mongoose";
const CoporateData = mongoose.model("CoporateData", CoporateDataSchema);
export async function submitCorporateData(membershipnumber: string) {
  const existingrecordByMembershipNumber: any = await CoporateData.findOne({
    membershipnumber: membershipnumber
  });
  if (
    existingrecordByMembershipNumber.status !=
    dataCaptureRegistrationStatus.Pending
  )
    throw "record Already Submitted";

  await CoporateData.findOneAndUpdate(
    { membershipnumber: membershipnumber },
    { status: dataCaptureRegistrationStatus.Submitted }
  );
}
