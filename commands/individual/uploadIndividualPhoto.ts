import { IndividualDataSchema } from "../../models/individualdata";
import { dataCaptureRegistrationStatus } from "../../parameters";
import * as mongoose from "mongoose";

const IndividualData = mongoose.model("IndividualData", IndividualDataSchema);

export async function uploadIndividualPhoto(
  mongo_id: string,
  membershipnumber: string,
  passportphotograph: string
) {
  // const existingrecordByMongoId: any = await IndividualData.findOne({
  //   _id: mongo_id
  // });

  const existingrecordByMembershipNumber: any = await IndividualData.findOne({
    membershipnumber: membershipnumber
  });
  // if (existingrecordByMembershipNumber) {
  //   if (existingrecordByMembershipNumber._id != existingrecordByMongoId._id)
  //     throw "This Membership Number Already Assigned";
  // }
  if (existingrecordByMembershipNumber.status != dataCaptureRegistrationStatus.Pending)
    throw "The Record Is No More Pending";
  //console.log()
  var updaterec: any = {
    //membershipnumber: membershipnumber,
    passportphotograph: passportphotograph
  };
  console.log(updaterec);
  await IndividualData.findOneAndUpdate({ membershipnumber: membershipnumber }, updaterec);
}
