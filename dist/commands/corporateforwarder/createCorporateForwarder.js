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
//import { raiseCorporateForwarderUpdatedEvent } from "../../domainevents/corporateForwarderEvents";
const corporateForwarder = mongoose.model("corporateForwarder", corporateforwarder_1.corporateForwarderSchema);
function createCorporateForwarder(
//mongo_id: string,
membershipnumber, companyname, userid) {
    return __awaiter(this, void 0, void 0, function* () {
        const existingrecordWithCRFFNNumber = yield corporateForwarder.findOne({
            membershipnumber: membershipnumber
        });
        if (existingrecordWithCRFFNNumber)
            throw "RFF Number Already exist.";
        var updaterec = {
            membershipnumber: membershipnumber,
            companyname: companyname,
            status: parameters_1.forwarderRecordStatus.Pending,
            userid: userid
        };
        //await corporateForwarder.findOneAndUpdate({ _id: mongo_id }, updaterec);
        var coporatedata = new corporateForwarder(updaterec);
        yield coporatedata.save();
        //await raiseCorporateForwarderUpdatedEvent(membershipnumber);
    });
}
exports.createCorporateForwarder = createCorporateForwarder;
//# sourceMappingURL=createCorporateForwarder.js.map