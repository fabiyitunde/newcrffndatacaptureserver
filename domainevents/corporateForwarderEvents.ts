import * as postal from "postal";
import { postalChannels, postalTopics } from "../parameters";
import { getCorporateForwarderByMembershipNumber } from "../queries/corporateForwarderQueries";

export const raiseCorporateForwarderUpdatedEvent = async (membershipnumber: string) => {
    const corporateforwarder = await getCorporateForwarderByMembershipNumber(membershipnumber);
    var eventobj: any = {};
    eventobj = corporateforwarder;
    const channel = postal.channel(postalChannels.crffnDataCapture);
    channel.publish(postalTopics.corporateForwarderUpdated, eventobj);
};


