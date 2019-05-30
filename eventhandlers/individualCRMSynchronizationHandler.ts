import * as postal from "postal";
import { postalChannels, postalTopics } from "../parameters";
import PQueue from "p-queue";
import fetch from "node-fetch";
import * as mongoose from "mongoose";

const baseurl: string = "http://185.122.167.222:8011";

const queue = new PQueue({ concurrency: 1 });
export const initializeIndividualCRMSyncronizationHandlers = () => {
  const channel = postal.channel(postalChannels.crffnDataCapture);
  channel.subscribe(postalTopics.individualDataCaptureApproved, eventobj => {
    queue.add(() =>
      Promise.resolve(syncronizeWithCRFFNCRM(eventobj)).then(() => {
        console.log("Done: Syncronizing With The CRM");
      })
    );
  });
};

const syncronizeWithCRFFNCRM = async (eventobj: any) => {
  const body = {
    membershipnumber: eventobj.membershipnumber,
    title: eventobj.title,
    surname: eventobj.surname,
    othernames: eventobj.othernames,
    category: eventobj.category,
    address: eventobj.address,
    email: eventobj.email,
    phonenumber: eventobj.phonenumber,
    state: eventobj.state.code,
    lga: eventobj.lga.code,
    typeofid: eventobj.typeofid,
    idcardnumber: eventobj.idcardnumber,
  };
  var response = await fetch(`${baseurl}/api/InternalRegistration/RegisterIndividual`, {
    method: "post",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  });

  return response.json();
};
