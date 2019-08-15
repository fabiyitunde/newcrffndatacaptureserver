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
const corporateforwarder_1 = require("../../models/corporateforwarder");
const parameters_1 = require("../../parameters");
const mongoose = require("mongoose");
const corporateForwarderEvents_1 = require("../../domainevents/corporateForwarderEvents");
const corporateForwarder = mongoose.model("corporateForwarder", corporateforwarder_1.corporateForwarderSchema);
function updateCorporateForwarder(mongo_id, membershipnumber, companyname, userid) {
    return __awaiter(this, void 0, void 0, function* () {
        const existingrecordByMongoId = yield corporateForwarder.findOne({
            _id: mongo_id
        });
        // console.log(existingrecordByMongoId);
        // const existingrecordByMembershipNumber: any = await corporateForwarder.findOne({
        //     membershipnumber: membershipnumber
        // });
        // console.log(existingrecordByMembershipNumber);
        // if (existingrecordByMembershipNumber) {
        //     if (existingrecordByMembershipNumber._id !== existingrecordByMongoId._id)
        //         throw "This Membership Number Already Assigned";
        // }
        if (existingrecordByMongoId.status != parameters_1.forwarderRecordStatus.Pending)
            throw "The Record Is No More Pending";
        var updaterec = {
            membershipnumber: membershipnumber,
            companyname: companyname,
            status: parameters_1.forwarderRecordStatus.Pending,
            userid: userid
        };
        yield corporateForwarder.findOneAndUpdate({ _id: mongo_id }, updaterec);
        yield corporateForwarderEvents_1.raiseCorporateForwarderUpdatedEvent(membershipnumber);
    });
}
exports.updateCorporateForwarder = updateCorporateForwarder;
//# sourceMappingURL=updateCorporateForwarder.js.map