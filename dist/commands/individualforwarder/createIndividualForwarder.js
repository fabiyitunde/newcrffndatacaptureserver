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
function createIndividualForwarder(
//mongo_id: string,
membershipnumber, surname, firstname, middlename, userid) {
    return __awaiter(this, void 0, void 0, function* () {
        const existingrecordWithCRFFNNumber = yield individualForwarder.findOne({
            membershipnumber: membershipnumber
        });
        if (existingrecordWithCRFFNNumber)
            throw "RFF Number Already exist.";
        var updaterec = {
            membershipnumber: membershipnumber,
            surname: surname,
            firstname: firstname,
            middlename: middlename,
            status: parameters_1.forwarderRecordStatus.Pending,
            userid: userid
        };
        var coporatedata = new individualForwarder(updaterec);
        yield coporatedata.save();
        //await individualForwarder.findOneAndUpdate({ _id: mongo_id }, updaterec);
        //await raiseIndividualforwarderForwarderUpdatedEvent(membershipnumber);
    });
}
exports.createIndividualForwarder = createIndividualForwarder;
//# sourceMappingURL=createIndividualForwarder.js.map