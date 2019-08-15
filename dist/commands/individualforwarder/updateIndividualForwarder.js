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
const individualForwarderEvents_1 = require("../../domainevents/individualForwarderEvents");
const individualForwarder = mongoose.model("individualForwarder", individualforwarder_1.individualforwarderSchema);
function updateIndividualForwarder(mongo_id, membershipnumber, surname, firstname, middlename, userid) {
    return __awaiter(this, void 0, void 0, function* () {
        const existingrecordByMongoId = yield individualForwarder.findOne({
            _id: mongo_id
        });
        // const existingrecordByMembershipNumber: any = await individualForwarder.findOne({
        //     membershipnumber: membershipnumber
        // });
        // if (existingrecordByMembershipNumber) {
        //     if (existingrecordByMembershipNumber._id != existingrecordByMongoId._id)
        //         throw "This Membership Number Already Assigned";
        // }
        if (existingrecordByMongoId.status != parameters_1.forwarderRecordStatus.Pending)
            throw "The Record Is No More Pending";
        var updaterec = {
            membershipnumber: membershipnumber,
            surname: surname,
            firstname: firstname,
            middlename: middlename,
            status: parameters_1.forwarderRecordStatus.Pending,
            userid: userid
        };
        yield individualForwarder.findOneAndUpdate({ _id: mongo_id }, updaterec);
        yield individualForwarderEvents_1.raiseIndividualforwarderForwarderUpdatedEvent(membershipnumber);
    });
}
exports.updateIndividualForwarder = updateIndividualForwarder;
//# sourceMappingURL=updateIndividualForwarder.js.map