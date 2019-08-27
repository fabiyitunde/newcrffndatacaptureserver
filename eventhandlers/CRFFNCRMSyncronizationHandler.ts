import * as postal from "postal";
import { postalChannels, postalTopics } from "../parameters";
import PQueue from "p-queue";
import fetch from "node-fetch";
import * as mongoose from "mongoose";

//const baseurl: string = "http://185.122.167.222:8012";
const baseurl: string = "http://localhost:4508";

const queue = new PQueue({ concurrency: 1 });
export const initializeCRFFNCRNSyncronizationHandlers = () => {
  const channel = postal.channel(postalChannels.crffnDataCapture);
  channel.subscribe(postalTopics.coporateDataCaptureApproved, eventobj => {
    queue.add(() =>
      Promise.resolve(syncronizeWithCRFFNCRM(eventobj)).then(() => {
        console.log("Done: Syncronizing With The CRM");
      }).catch(err => console.log(err))
    );
  });
};

const syncronizeWithCRFFNCRM = async (eventobj: any) => {
  const body = {
    address: eventobj.address,
    association: eventobj.association,
    companyname: eventobj.companyname,
    contactperson: eventobj.contactperson,
    email: eventobj.email,
    freightForwaderCategory: eventobj.category,
    airport: eventobj.isOperatingAtAirPort,
    landborder: eventobj.isOperatingAtLandBorder,
    seaport: eventobj.isOperatingAtSeaPort,
    opnstartdate: eventobj.operationStartDate,
    phonenumber: eventobj.phoneNumber,
    postaladdress: eventobj.postalAddress,
    rcnos: eventobj.rCNos,
    statecode: eventobj.state.code,
    website: eventobj.website,
    CRFFNNumber: eventobj.membershipnumber
  };
  var response = await fetch(`${baseurl}/api/InternalRegistration/register`, {
    method: "post",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  });
  //console.log(response.body);
  return response.json();
};
