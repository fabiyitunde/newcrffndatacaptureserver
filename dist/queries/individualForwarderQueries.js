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
const individualforwarder_1 = require("../models/individualforwarder");
const mongoose = require("mongoose");
const parameters_1 = require("../parameters");
const IndividualForwarder = mongoose.model("IndividualForwarder", individualforwarder_1.individualforwarderSchema);
exports.getUnSubmittedIndividualForwarderList = () => __awaiter(this, void 0, void 0, function* () {
    var existinglist = yield IndividualForwarder.find({
        status: parameters_1.forwarderRecordStatus.Pending
    });
    return existinglist;
});
exports.getIndividualForwarderById = (id) => __awaiter(this, void 0, void 0, function* () {
    var existingrec = yield IndividualForwarder.findOne({
        _id: id
    });
    return existingrec;
});
exports.getIndividualForwarderByMembershipNumber = (membershipnumber) => __awaiter(this, void 0, void 0, function* () {
    var existingrec = yield IndividualForwarder.findOne({
        membershipnumber: membershipnumber
    });
    return existingrec;
});
//# sourceMappingURL=individualForwarderQueries.js.map