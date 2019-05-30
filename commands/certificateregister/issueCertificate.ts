import { CertificateRegisterSchema } from "../../models/certificateregister"
import { CertificateRegisterStatus } from "../../parameters";
import * as mongoose from "mongoose";

const CertificateRegister = mongoose.model("CertificateRegister", CertificateRegisterSchema);

export async function issueCertificate(membershipnumber: string) {
    const existingrecordByMembershipNumber: any = await CertificateRegister.findOne({
      membershipnumber: membershipnumber
    });
    if (
      existingrecordByMembershipNumber.status !=
      CertificateRegisterStatus.Approved
    )
      throw "Record Not in Approval Stage";
  
    await CertificateRegister.findOneAndUpdate(
      { membershipnumber: membershipnumber },
      { status: CertificateRegisterStatus.Issued }
    );
  }