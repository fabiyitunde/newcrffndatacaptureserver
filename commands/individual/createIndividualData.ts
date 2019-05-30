import { IndividualDataSchema } from "../../models/individualdata";
import { dataCaptureRegistrationStatus } from "../../parameters";
import * as mongoose from "mongoose";

import { getStateList, getLGAList } from "../../queries/parameterQueries";
const IndividualData = mongoose.model("IndividualData", IndividualDataSchema);
export async function createIndividualData(
  membershipnumber: string,
  title: string,
  surname: string,
  othernames: string,
  category: string,
  address: string,
  email: string,
  phonenumber: string,
  statecode: string,
  lgacode: string,
  typeofid: string,
  idcardnumber: string
) {
  const existingrecordWithEmail: any = await IndividualData.findOne({
    email: email
  });
  if (existingrecordWithEmail) throw "Email Already exist.";
  const existingrecordWithCRFFNNumber: any = await IndividualData.findOne({
    membershipnumber: membershipnumber
  });
  if (existingrecordWithCRFFNNumber) throw "CRFFN Number Already exist.";

  const statelist: any[] = await getStateList();
  const lgalist: any[] = await getLGAList();

  const existingstate: any = statelist.find(a => a.code == statecode);
  const existinglga: any = lgalist.find(a => a.code == lgacode);
  var newrec: any = {
    membershipnumber: membershipnumber,
    title: title,
    surname: surname,
    othernames:  othernames,
    category: category,
    address: address,
    email: email,
    phonenumber: phonenumber,
    state: { code: existingstate.code, description: existingstate.description },
    lga: { code: existinglga.code, description: existinglga.description },  
    typeofid: typeofid,
    idcardnumber: idcardnumber,
    status: dataCaptureRegistrationStatus.Pending,
  };
  var individualdata = new IndividualData(newrec);
  await individualdata.save();
}
