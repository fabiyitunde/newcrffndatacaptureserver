import * as postal from "postal";
import { postalChannels, postalTopics } from "../parameters";
import { getCertificateRegisterByMembershipNumber } from "../queries/certificateRegisterQueries";

export const raiseCertificateRegisterApprovedEvent = async (membershipnumber: string) => {
    // const corporateforwarder = await getCorporateForwarderByMembershipNumber(membershipnumber);
    // var eventobj: any = {};
    // eventobj = corporateforwarder;
    const channel = postal.channel(postalChannels.crffnDataCapture);
    channel.publish(postalTopics.certificateRegisterApproved, membershipnumber);
};