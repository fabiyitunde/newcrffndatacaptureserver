import * as postal from "postal";
import { postalChannels, postalTopics } from "../parameters";
import { getIndividualDataByCRFFNNumber } from "../queries/individualDataQueries";

export const raiseIndividualDataCaptureApprovedEvent = async (
    membershipnumber: string
) => {
    const individualdata = await getIndividualDataByCRFFNNumber(membershipnumber);
    var eventobj: any = {};
    eventobj = individualdata;
    const channel = postal.channel(postalChannels.crffnDataCapture);
    channel.publish(postalTopics.individualDataCaptureApproved, eventobj);
};
