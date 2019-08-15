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
const createCertificateRegister_1 = require("../commands/certificateregister/createCertificateRegister");
const queue = new p_queue_1.default({ concurrency: 1 });
exports.individualForwarderUpdatedEventHandler = () => {
    const channel = postal.channel(parameters_1.postalChannels.crffnDataCapture);
    channel.subscribe(parameters_1.postalTopics.individualForwarderUpdated, eventobj => {
        queue.add(() => Promise.resolve(CreateCertificateRegister(eventobj)).then(() => {
            console.log("Certificate Register Created");
        }));
    });
};
const CreateCertificateRegister = (eventobj) => __awaiter(this, void 0, void 0, function* () {
    const body = {
        membershipnumber: eventobj.membershipnumber,
        name: eventobj.surname + " " + eventobj.firstname + " " + eventobj.middlename,
        category: eventobj.category,
        userid: eventobj.userid
    };
    createCertificateRegister_1.createCertificateRegister(body.membershipnumber, body.name, body.category, body.userid);
});
//# sourceMappingURL=individualForwarderEventHandler.js.map