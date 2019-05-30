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
const treatCorporateForwarder_1 = require("../commands/corporateforwarder/treatCorporateForwarder");
const treatIndividualForwarder_1 = require("../commands/individualforwarder/treatIndividualForwarder");
const certificateRegisterQueries_1 = require("../queries/certificateRegisterQueries");
const queue = new p_queue_1.default({ concurrency: 1 });
exports.certificateRegisterApprovedEventHandler = () => {
    const channel = postal.channel(parameters_1.postalChannels.crffnDataCapture);
    channel.subscribe(parameters_1.postalTopics.certificateRegisterApproved, eventobj => {
        queue.add(() => Promise.resolve(TreatForwarder(eventobj)).then(() => {
            console.log("Forwarder Record Treated");
        }));
    });
};
const TreatForwarder = (eventobj) => __awaiter(this, void 0, void 0, function* () {
    var returnobj = yield certificateRegisterQueries_1.getCertificateRegisterByMembershipNumber(eventobj);
    if (returnobj.category == "Individual") {
        treatIndividualForwarder_1.treatIndividualForwarder(eventobj);
    }
    else {
        treatCorporateForwarder_1.treatCorporateForwarder(eventobj);
    }
});
//# sourceMappingURL=certificateRegisterEventHandler.js.map