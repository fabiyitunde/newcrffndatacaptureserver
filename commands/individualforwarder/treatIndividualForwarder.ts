import { individualforwarderSchema } from "../../models/individualforwarder";
import { forwarderRecordStatus } from "../../parameters";
import * as mongoose from "mongoose";

const individualForwarder = mongoose.model("individualForwarder", individualforwarderSchema);
export async function treatIndividualForwarder(membershipnumber: string) {
    var updaterec: any = {
        membershipnumber: membershipnumber,
        status: forwarderRecordStatus.Treated
    };
    await individualForwarder.findOneAndUpdate({ membershipnumber: membershipnumber }, updaterec);
}
