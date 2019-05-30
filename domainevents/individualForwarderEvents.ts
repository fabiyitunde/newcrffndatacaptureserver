import * as postal from "postal";
import { postalChannels, postalTopics } from "../parameters";
import { getIndividualForwarderByMembershipNumber } from "../queries/individualForwarderQueries";

export const raiseIndividualforwarderForwarderUpdatedEvent = async (membershipnumber: string) => {
    const individualforwarder = await getIndividualForwarderByMembershipNumber(membershipnumber);
    var eventobj: any = {};
    eventobj = individualforwarder;
    const channel = postal.channel(postalChannels.crffnDataCapture);
    channel.publish(postalTopics.individualForwarderUpdated, eventobj);
};


