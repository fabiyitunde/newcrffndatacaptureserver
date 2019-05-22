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
const coporatedata_1 = require("../../models/coporatedata");
const parameters_1 = require("../../parameters");
const mongoose = require("mongoose");
const CoporateData = mongoose.model("CoporateData", coporatedata_1.CoporateDataSchema);
function returnCoporateData(membershipnumber) {
    return __awaiter(this, void 0, void 0, function* () {
        const existingrecordByMembershipNumber = yield CoporateData.findOne({
            membershipnumber: membershipnumber
        });
        if (existingrecordByMembershipNumber.status !=
            parameters_1.dataCaptureRegistrationStatus.Submitted)
            throw "record No More Pending For Approval";
        yield CoporateData.findOneAndUpdate({ membershipnumber: membershipnumber }, { status: parameters_1.dataCaptureRegistrationStatus.Pending });
    });
}
exports.returnCoporateData = returnCoporateData;
//# sourceMappingURL=returnCoporateData.js.map