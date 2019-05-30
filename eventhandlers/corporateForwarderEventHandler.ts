import * as postal from "postal";
import { postalChannels, postalTopics } from "../parameters";
import PQueue from "p-queue";
import fetch from "node-fetch";
import * as mongoose from "mongoose";
import { createCertificateRegister } from "../commands/certificateregister/createCertificateRegister";
import { treatCorporateForwarder } from "../commands/corporateforwarder/treatCorporateForwarder";

const queue = new PQueue({ concurrency: 1 });
export const corporateForwarderUpdatedEventHandler = () => {
  const channel = postal.channel(postalChannels.crffnDataCapture);
  channel.subscribe(postalTopics.corporateForwarderUpdated, eventobj => {
    queue.add(() =>
      Promise.resolve(CreateCertificateRegister(eventobj)).then(() => {
        console.log("Certificate Register Created");
      })
    );
  });
};

const CreateCertificateRegister = async (eventobj: any) => {
    const body = {
        membershipnumber: eventobj.membershipnumber,
        name: eventobj.companyname,
        category: eventobj.category,
        userid: eventobj.userid
    }
    createCertificateRegister(body.membershipnumber, body.name, body.category, body.userid);
}; 

