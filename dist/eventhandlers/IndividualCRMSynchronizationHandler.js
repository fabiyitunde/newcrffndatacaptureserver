"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const postal = require("postal");
const parameters_1 = require("../parameters");
const p_queue_1 = require("p-queue");
const node_fetch_1 = require("node-fetch");
//const baseurl: string = "http://185.122.167.222:8012";
const baseurl = "http://localhost:4508";
const queue = new p_queue_1.default({ concurrency: 1 });
exports.initializeIndividualCRMSyncronizationHandlers = () => {
    const channel = postal.channel(parameters_1.postalChannels.crffnDataCapture);
    channel.subscribe(parameters_1.postalTopics.individualDataCaptureApproved, eventobj => {
        queue.add(() => Promise.resolve(syncronizeWithCRFFNCRM(eventobj)).then(() => {
            console.log("Done: Syncronizing With The CRM");
        }).catch(err => console.log(err)));
    });
};
const syncronizeWithCRFFNCRM = (eventobj) => __awaiter(this, void 0, void 0, function* () {
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
    var response = yield node_fetch_1.default(`${baseurl}/api/InternalRegistration/RegisterIndividual`, {
        method: "post",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    }); //.catch(err => handleErrors(response));
    //console.log(response.body);
    return response.json();
});
// function handleErrors(response) {
//   if (!response.ok) {
//     console.log(response.statusText);
//       throw Error(response.statusText);
//   }
//   return response;
// }
//# sourceMappingURL=IndividualCRMSynchronizationHandler.js.map