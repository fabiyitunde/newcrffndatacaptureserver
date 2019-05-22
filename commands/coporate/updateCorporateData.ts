import { CoporateDataSchema } from "../../models/coporatedata";
import { dataCaptureRegistrationStatus } from "../../parameters";
import * as mongoose from "mongoose";

import { getStateList } from "../../queries/parameterQueries";
const CoporateData = mongoose.model("CoporateData", CoporateDataSchema);
export async function updateCorporateData(
  mongo_id: string,
  membershipnumber: string,
  companyname: string,
  category: string,
  address: string,
  association: string,
  email: string,
  contactperson: string,
  isOperatingAtAirPort: boolean,
  isOperatingAtLandBorder: boolean,
  isOperatingAtSeaPort: boolean,
  operationStartDate: Date,
  phoneNumber: string,
  postalAddress: string,
  rCNos: string,
  statecode: string,
  website: string
) {
  const existingrecordByMongoId: any = await CoporateData.findOne({
    _id: mongo_id
  });
  const existingrecordByMembershipNumber: any = await CoporateData.findOne({
    membershipnumber: membershipnumber
  });
  if (existingrecordByMembershipNumber) {
    if (existingrecordByMembershipNumber._id != existingrecordByMongoId._id)
      throw "This Memebership Number Already Assigned";
  }
  if (existingrecordByMongoId.status != dataCaptureRegistrationStatus.Pending)
    throw "The Record Is No More Pending";
  const statelist: any[] = await getStateList();

  const existingstate: any = statelist.find(a => a.code == statecode);
  var updaterec: any = {
    membershipnumber: membershipnumber,
    companyname: companyname,
    category: category,
    address: address,
    association: association,

    state: { code: existingstate.code, description: existingstate.description },
    contactperson: contactperson,
    email: email,
    isOperatingAtAirPort: isOperatingAtAirPort,
    isOperatingAtLandBorder: isOperatingAtLandBorder,
    isOperatingAtSeaPort: isOperatingAtSeaPort,
    operationStartDate: operationStartDate,
    phoneNumber: phoneNumber,
    postalAddress: postalAddress,
    rCNos: rCNos,
    status: dataCaptureRegistrationStatus.Pending,
    website: website
  };
  await CoporateData.findOneAndUpdate({ _id: mongo_id }, updaterec);
}
