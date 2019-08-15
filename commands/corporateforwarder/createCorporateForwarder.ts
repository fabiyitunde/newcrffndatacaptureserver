import { corporateForwarderSchema } from "../../models/corporateforwarder";
import { forwarderRecordStatus } from "../../parameters";
import * as mongoose from "mongoose";
//import { raiseCorporateForwarderUpdatedEvent } from "../../domainevents/corporateForwarderEvents";


const corporateForwarder = mongoose.model("corporateForwarder", corporateForwarderSchema);
export async function createCorporateForwarder(
    //mongo_id: string,
    membershipnumber: string,
    companyname: string,
    userid: string
) {
    const existingrecordWithCRFFNNumber: any = await corporateForwarder.findOne({
        membershipnumber: membershipnumber
    });
    if (existingrecordWithCRFFNNumber) throw "RFF Number Already exist.";

    var updaterec: any = {
        membershipnumber: membershipnumber,
        companyname: companyname,
        status: forwarderRecordStatus.Pending,
        userid: userid
    };
    //await corporateForwarder.findOneAndUpdate({ _id: mongo_id }, updaterec);
    var coporatedata = new corporateForwarder(updaterec);
    await coporatedata.save();
    //await raiseCorporateForwarderUpdatedEvent(membershipnumber);
}
