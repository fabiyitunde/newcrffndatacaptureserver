import { CertificateRegisterSchema } from "../../models/certificateregister";
import { CertificateRegisterStatus, FreightForwaderCategory } from "../../parameters";
import * as mongoose from "mongoose";
import { getCategory } from "../../queries/ParameterQueries";

const CertificateRegister = mongoose.model("CertificateRegister", CertificateRegisterSchema);
export async function updateCertificateRegister(
    mongo_id: string,
    membershipnumber: string,
    name: string,
    categorycode: number,
    categorydescription: string,
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
    ////const categoryobj: string = FreightForwaderCategory.getDescription(category);
    //console.log(existingrecordByMongoId);
    //console.log(category);
    //console.log(categoryobj);
    var updaterec: any = {
        //_id : mongo_id,
        membershipnumber: membershipnumber,
        name: name,
        category: { code: categorycode, description: categorydescription },
        status: CertificateRegisterStatus.Pending,
        userid: userid
    };
    //var certificateregister = new CertificateRegister(newrec);
    //const ID = mongoose.Types.ObjectId(mongo_id);
    //console.log(updaterec);
    //console.log(ID);
    await CertificateRegister.findOneAndUpdate({ _id: mongo_id }, updaterec);
}
