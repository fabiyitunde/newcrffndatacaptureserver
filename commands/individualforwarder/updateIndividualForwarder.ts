import { individualforwarderSchema } from "../../models/individualforwarder";
import { forwarderRecordStatus } from "../../parameters";
import * as mongoose from "mongoose";
import { raiseCorporateForwarderUpdatedEvent } from "../../domainevents/corporateForwarderEvents";


const individualForwarder = mongoose.model("individualForwarder", individualforwarderSchema);
export async function updateIndividualForwarder(
    mongo_id: string,
    membershipnumber: string,
    companyname: string
) {
    const existingrecordByMongoId: any = await individualForwarder.findOne({
        _id: mongo_id
    });
    const existingrecordByMembershipNumber: any = await individualForwarder.findOne({
        membershipnumber: membershipnumber
    });
    if (existingrecordByMembershipNumber) {
        if (existingrecordByMembershipNumber._id != existingrecordByMongoId._id)
            throw "This Membership Number Already Assigned";
    }
    if (existingrecordByMongoId.status != forwarderRecordStatus.Pending)
        throw "The Record Is No More Pending";

    var updaterec: any = {
        membershipnumber: membershipnumber,
        companyname: companyname,
        status: forwarderRecordStatus.Pending
    };
    await individualForwarder.findOneAndUpdate({ _id: mongo_id }, updaterec);

    await raiseCorporateForwarderUpdatedEvent(membershipnumber);
}
