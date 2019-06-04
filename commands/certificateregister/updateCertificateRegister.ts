import { CertificateRegisterSchema } from "../../models/certificateregister";
import { CertificateRegisterStatus } from "../../parameters";
import * as mongoose from "mongoose";
import { getCategory } from "../../queries/ParameterQueries";

const CertificateRegister = mongoose.model("CertificateRegister", CertificateRegisterSchema);
export async function updateCertificateRegister(
    mongo_id: string,
    membershipnumber: string,
    name: string,
    category: number,
    userid: string
) {
    const existingrecordByMongoId: any = await CertificateRegister.findOne({
        _id: mongo_id
    });
    if (existingrecordByMongoId.status != CertificateRegisterStatus.Pending)
        throw "The Record Is No More Pending";
    
    // const existingrecordByMembershipNumber: any = await CertificateRegister.findOne({
    //     membershipnumber: membershipnumber
    // });
    // if (existingrecordByMembershipNumber) throw "Membership Number Already exist.";
    const categoryobj: any = await getCategory(category);
    console.log(mongo_id);
    console.log(category);
    console.log(categoryobj);
    var updaterec: any = {
        membershipnumber: membershipnumber,
        name: name,
        category: { code: category, description: categoryobj},
        status: CertificateRegisterStatus.Pending,
        userid: userid
    };
    //var certificateregister = new CertificateRegister(newrec);
    const ID = mongoose.Types.ObjectId(mongo_id);
    console.log(updaterec);
    console.log(ID);
    await CertificateRegister.findOneAndUpdate( { _id: ID }, updaterec);
}
