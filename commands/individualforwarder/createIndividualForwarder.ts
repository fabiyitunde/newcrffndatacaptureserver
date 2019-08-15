import { individualforwarderSchema } from "../../models/individualforwarder";
import { forwarderRecordStatus } from "../../parameters";
import * as mongoose from "mongoose";
import { raiseIndividualforwarderForwarderUpdatedEvent } from "../../domainevents/individualForwarderEvents";


const individualForwarder = mongoose.model("individualForwarder", individualforwarderSchema);
export async function createIndividualForwarder(
    //mongo_id: string,
    membershipnumber: string,
    surname: string,
    firstname: string,
    middlename: string,
    userid: string
) {
    const existingrecordWithCRFFNNumber: any = await individualForwarder.findOne({
        membershipnumber: membershipnumber
    });
    if (existingrecordWithCRFFNNumber) throw "RFF Number Already exist.";

    var updaterec: any = {
        membershipnumber: membershipnumber,
        surname: surname,
        firstname: firstname,
        middlename: middlename,
        status: forwarderRecordStatus.Pending,
        userid: userid
    };
    var coporatedata = new individualForwarder(updaterec);
    await coporatedata.save();
    //await individualForwarder.findOneAndUpdate({ _id: mongo_id }, updaterec);

    //await raiseIndividualforwarderForwarderUpdatedEvent(membershipnumber);
}
