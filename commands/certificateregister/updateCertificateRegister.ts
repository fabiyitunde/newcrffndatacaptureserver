import { CertificateRegisterSchema } from "../../models/certificateregister";
import { CertificateRegisterStatus } from "../../parameters";
import * as mongoose from "mongoose";

const CertificateRegister = mongoose.model("CertificateRegister", CertificateRegisterSchema);
export async function updateCertificateRegister(
    mongo_id: string,
    membershipnumber: string,
    companyname: string,
    category: string
) {
    const existingrecordByMongoId: any = await CertificateRegister.findOne({
        _id: mongo_id
    });
    if (existingrecordByMongoId.status != CertificateRegisterStatus.Pending)
        throw "The Record Is No More Pending";
    
    const existingrecordByMembershipNumber: any = await CertificateRegister.findOne({
        membershipnumber: membershipnumber
    });
    if (existingrecordByMembershipNumber) throw "Membership Number Already exist.";

    var updaterec: any = {
        membershipnumber: membershipnumber,
        name: companyname,
        category: category,
        status: CertificateRegisterStatus.Pending
    };
    //var certificateregister = new CertificateRegister(newrec);
    await CertificateRegister.findOneAndUpdate({ _id: mongo_id }, updaterec);
}
