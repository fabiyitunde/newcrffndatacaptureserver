import { CertificateRegisterSchema } from "../../models/certificateregister"
import { CertificateRegisterStatus } from "../../parameters";
import * as mongoose from "mongoose";

const CertificateRegister = mongoose.model("CertificateRegister", CertificateRegisterSchema);

export async function returnCertificateRegister(membershipnumber: string) {
    const existingrecordByMembershipNumber: any = await CertificateRegister.findOne({
      membershipnumber: membershipnumber
    });
    if (
      existingrecordByMembershipNumber.status !=
      CertificateRegisterStatus.Submitted
    )
      throw "Record Not in Submitted Stage";
  
    await CertificateRegister.findOneAndUpdate(
      { membershipnumber: membershipnumber },
      { status: CertificateRegisterStatus.Pending }
    );
  }