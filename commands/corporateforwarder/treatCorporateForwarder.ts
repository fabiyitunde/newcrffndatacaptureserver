import { corporateForwarderSchema } from "../../models/corporateforwarder";
import { forwarderRecordStatus } from "../../parameters";
import * as mongoose from "mongoose";

const corporateForwarder = mongoose.model("corporateForwarder", corporateForwarderSchema);
export async function treatCorporateForwarder(membershipnumber: string) {
    var updaterec: any = {
        membershipnumber: membershipnumber,
        status: forwarderRecordStatus.Treated
    };
    await corporateForwarder.findOneAndUpdate({ membershipnumber: membershipnumber }, updaterec);
}
