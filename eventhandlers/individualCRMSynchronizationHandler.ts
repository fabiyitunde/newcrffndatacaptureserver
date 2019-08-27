import * as postal from "postal";
import { postalChannels, postalTopics } from "../parameters";
import PQueue from "p-queue";
import fetch from "node-fetch";
import * as mongoose from "mongoose";

//const baseurl: string = "http://185.122.167.222:8012";
const baseurl: string = "http://localhost:4508";

const queue = new PQueue({ concurrency: 1 });
export const initializeIndividualCRMSyncronizationHandlers = () => {
  const channel = postal.channel(postalChannels.crffnDataCapture);
  channel.subscribe(postalTopics.individualDataCaptureApproved, eventobj => {
    queue.add(() =>
      Promise.resolve(syncronizeWithCRFFNCRM(eventobj)).then(() => {
        console.log("Done: Syncronizing With The CRM");
      }).catch(err => console.log(err))
    );
  });
};

const syncronizeWithCRFFNCRM = async (eventobj: any) => {
  const body = {
    crffnnumber: eventobj.membershipnumber,
    titleid: eventobj.title.code,
    surname: eventobj.surname,
    othernames: eventobj.othernames,
    category: eventobj.category.code,
    address: eventobj.address,
    email: eventobj.email,
    phonenumber: eventobj.phonenumber,
    stateid: eventobj.state.code,
    lgaid: eventobj.lga.code,
    typeofid: eventobj.typeofid,
    idcardnumber: eventobj.idcardnumber,
    dateofbirth: eventobj.dateofbirth
  };
  var response = await fetch(`${baseurl}/api/InternalRegistration/RegisterIndividual`, {
    method: "post",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  });//.catch(err => handleErrors(response));
  //console.log(response.body);
  return response.json();
};

// function handleErrors(response) {
//   if (!response.ok) {
//     console.log(response.statusText);
//       throw Error(response.statusText);
//   }
//   return response;
// }
