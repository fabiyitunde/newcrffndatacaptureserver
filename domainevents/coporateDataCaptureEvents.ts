import * as postal from "postal";
import { postalChannels, postalTopics } from "../parameters";
import { getCoporateDataByCRFFNNumber } from "../queries/coporateDataQueries";

export const raiseCoporateDataCaptureApprovedEvent = async (
  membershipnumber: string
) => {
  const coporatedata = await getCoporateDataByCRFFNNumber(membershipnumber);
  var eventobj: any = {};
  eventobj = coporatedata;
  const channel = postal.channel(postalChannels.crffnDataCapture);
  channel.publish(postalTopics.coporateDataCaptureApproved, eventobj);
};
