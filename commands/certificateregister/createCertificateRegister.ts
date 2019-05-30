import { CertificateRegisterSchema } from "../../models/certificateregister";
import { CertificateRegisterStatus } from "../../parameters";
import * as mongoose from "mongoose";

const CertificateRegister = mongoose.model("CertificateRegister", CertificateRegisterSchema);
export async function createCertificateRegister(
  membershipnumber: string,
  companyname: string,
  category: string
) {
  
  const existingrecordWithCRFFNNumber: any = await CertificateRegister.findOne({
    membershipnumber: membershipnumber
  });
  if (existingrecordWithCRFFNNumber) throw "CRFFN Number Already exist.";

  var newrec: any = {
    membershipnumber: membershipnumber,
    companyname: companyname,
    category: category,
    status: CertificateRegisterStatus.Pending
  };
  var certificateregister = new CertificateRegister(newrec);
  await certificateregister.save();
}
