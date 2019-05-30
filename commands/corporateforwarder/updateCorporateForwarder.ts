import { corporateForwarderSchema } from "../../models/corporateforwarder";
import { forwarderRecordStatus } from "../../parameters";
import * as mongoose from "mongoose";
import { raiseCorporateForwarderUpdatedEvent } from "../../domainevents/corporateForwarderEvents";


const corporateForwarder = mongoose.model("corporateForwarder", corporateForwarderSchema);
export async function updateCorporateForwarder(
    mongo_id: string,
    membershipnumber: string,
    companyname: string
) {
    const existingrecordByMongoId: any = await corporateForwarder.findOne({
        _id: mongo_id
    });
    const existingrecordByMembershipNumber: any = await corporateForwarder.findOne({
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
    await corporateForwarder.findOneAndUpdate({ _id: mongo_id }, updaterec);

    await raiseCorporateForwarderUpdatedEvent(membershipnumber);
}
