import { corporateForwarderSchema } from "../models/corporateforwarder";
import { CertificateRegisterSchema } from "../models/certificateregister"
import * as mongoose from "mongoose";
import { forwarderRecordStatus, FreightForwaderCategory } from "../parameters";


const CorporateForwarder = mongoose.model("CorporateForwarder", corporateForwarderSchema);
//const CertificateRegister = mongoose.model("CertificateRegister", CertificateRegisterSchema);

export const getUnSubmittedCorporateForwarderList = async () => {
    var existinglist: any = await CorporateForwarder.find({
        status: forwarderRecordStatus.Pending
    });
    return existinglist;
};

export const getCorporateForwarderById = async (id: string) => {
    var existingrec: any = await CorporateForwarder.findOne({
        _id: id
    });
    return existingrec;
};

export const getCorporateForwarderByMembershipNumber = async (membershipnumber: string) => {
    var existingrec: any = await CorporateForwarder.findOne({
        membershipnumber: membershipnumber
    });
    return existingrec;
};

export const getForwarderCategoryList = async () => {

    //var existinglist = Object.keys(FreightForwaderCategory.getList().map( (obj) ));
    //var existinglist: any [];

    return Object.keys(FreightForwaderCategory)
        .filter(key => typeof FreightForwaderCategory[key] === 'number')
        .map(key => ({ id: FreightForwaderCategory[key], name: key }))
    //return existinglist;
};



// export const getApprovedCertificateRegisterList = async () => {
//     var existinglist: any = await CertificateRegister.find({
//         status: CertificateRegisterStatus.Approved
//     });
//     return existinglist;
// };