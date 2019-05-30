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
const corporateForwarderQueries_1 = require("../queries/corporateForwarderQueries");
exports.raiseCorporateForwarderUpdatedEvent = (membershipnumber) => __awaiter(this, void 0, void 0, function* () {
    const corporateforwarder = yield corporateForwarderQueries_1.getCorporateForwarderByMembershipNumber(membershipnumber);
    var eventobj = {};
    eventobj = corporateforwarder;
    const channel = postal.channel(parameters_1.postalChannels.crffnDataCapture);
    channel.publish(parameters_1.postalTopics.corporateForwarderUpdated, eventobj);
});
//# sourceMappingURL=corporateForwarderEvents.js.map