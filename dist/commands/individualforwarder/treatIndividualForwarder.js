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
const individualforwarder_1 = require("../../models/individualforwarder");
const parameters_1 = require("../../parameters");
const mongoose = require("mongoose");
const individualForwarder = mongoose.model("individualForwarder", individualforwarder_1.individualforwarderSchema);
function treatIndividualForwarder(membershipnumber) {
    return __awaiter(this, void 0, void 0, function* () {
        var updaterec = {
            membershipnumber: membershipnumber,
            status: parameters_1.forwarderRecordStatus.Treated
        };
        yield individualForwarder.findOneAndUpdate({ membershipnumber: membershipnumber }, updaterec);
    });
}
exports.treatIndividualForwarder = treatIndividualForwarder;
//# sourceMappingURL=treatIndividualForwarder.js.map