import { CertificateRegisterSchema } from "../../models/certificateregister"
import { CertificateRegisterStatus } from "../../parameters";
import * as mongoose from "mongoose";

const CertificateRegister = mongoose.model("CertificateRegister", CertificateRegisterSchema);

export async function submitCertificateRegister(membershipnumber: string) {
    const existingrecordByMembershipNumber: any = await CertificateRegister.findOne({
      membershipnumber: membershipnumber
    });
    if (
      existingrecordByMembershipNumber.status !=
      CertificateRegisterStatus.Pending
    )
      throw "Record Not in Pending Stage";
  
    await CertificateRegister.findOneAndUpdate(
      { membershipnumber: membershipnumber },
      { status: CertificateRegisterStatus.Submitted }
    );
  }