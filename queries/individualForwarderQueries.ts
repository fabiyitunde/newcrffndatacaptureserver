import { individualforwarderSchema } from "../models/individualforwarder";
import * as mongoose from "mongoose";
import { forwarderRecordStatus, CertificateRegisterStatus } from "../parameters";


const IndividualForwarder = mongoose.model("IndividualForwarder", individualforwarderSchema);

export const getUnSubmittedIndividualForwarderList = async () => {
    var existinglist: any = await IndividualForwarder.find({
        status: forwarderRecordStatus.Pending
    });
    return existinglist;
};

export const getIndividualForwarderById = async (id: string) => {
    var existingrec: any = await IndividualForwarder.findOne({
        _id: id
    });
    return existingrec;
};

export const getIndividualForwarderByMembershipNumber = async (membershipnumber: string) => {
    var existingrec: any = await IndividualForwarder.findOne({
        membershipnumber: membershipnumber
    });
    return existingrec;
};

