import { IndividualDataSchema } from "../../models/individualdata";
import { dataCaptureRegistrationStatus } from "../../parameters";
import * as mongoose from "mongoose";
const IndividualData = mongoose.model("IndividualData", IndividualDataSchema);
export async function submitIndividualData(membershipnumber: string) {
  const existingrecordByMembershipNumber: any = await IndividualData.findOne({
    membershipnumber: membershipnumber
  });
  if (
    existingrecordByMembershipNumber.status !=
    dataCaptureRegistrationStatus.Pending
  )
    throw "record Already Submitted";

  await IndividualData.findOneAndUpdate(
    { membershipnumber: membershipnumber },
    { status: dataCaptureRegistrationStatus.Submitted }
  );
}
