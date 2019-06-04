import { CertificateRegisterSchema } from "../../models/certificateregister";
import { CertificateRegisterStatus } from "../../parameters";
import * as mongoose from "mongoose";
import { getCategory } from "../../queries/ParameterQueries";

const CertificateRegister = mongoose.model("CertificateRegister", CertificateRegisterSchema);
export async function createCertificateRegister(
  membershipnumber: string,
  name: string,
  category: number,
  userid: string
) {
  
  const existingrecordWithCRFFNNumber: any = await CertificateRegister.findOne({
    membershipnumber: membershipnumber
  });
  if (existingrecordWithCRFFNNumber) throw "CRFFN Number Already exist.";
  const categoryobj: any = getCategory(category);
  var newrec: any = {
    membershipnumber: membershipnumber,
    name: name,
    category: { code: category, description: categoryobj},
    status: CertificateRegisterStatus.Pending,
    userid: userid
  };
  console.log(newrec);
  var certificateregister = new CertificateRegister(newrec);
  await certificateregister.save();
}
