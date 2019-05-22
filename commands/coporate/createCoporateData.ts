import { CoporateDataSchema } from "../../models/coporatedata";
import { dataCaptureRegistrationStatus } from "../../parameters";
import * as mongoose from "mongoose";

import { getStateList } from "../../queries/parameterQueries";
const CoporateData = mongoose.model("CoporateData", CoporateDataSchema);
export async function createCoporateData(
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
  const existingrecordWithEmail: any = await CoporateData.findOne({
    email: email
  });
  if (existingrecordWithEmail) throw "Email Already exist.";
  const existingrecordWithCRFFNNumber: any = await CoporateData.findOne({
    membershipnumber: membershipnumber
  });
  if (existingrecordWithCRFFNNumber) throw "CRFFN Number Already exist.";

  const statelist: any[] = await getStateList();

  const existingstate: any = statelist.find(a => a.code == statecode);
  var newrec: any = {
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
  var coporatedata = new CoporateData(newrec);
  await coporatedata.save();
}
