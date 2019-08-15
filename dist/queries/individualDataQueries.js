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
const individualdata_1 = require("../models/individualdata");
const parameters_1 = require("../parameters");
const mongoose = require("mongoose");
const IndividualData = mongoose.model("IndividualData", individualdata_1.IndividualDataSchema);
exports.getIndividualDataByCRFFNNumber = (membershipnumber) => __awaiter(this, void 0, void 0, function* () {
    var existingrec = yield IndividualData.findOne({
        membershipnumber: membershipnumber
    });
    return existingrec;
});
exports.getIndividualDataById = (id) => __awaiter(this, void 0, void 0, function* () {
    var existingrec = yield IndividualData.findOne({
        _id: id
    });
    return existingrec;
});
exports.getUnSubmittedIndividualDataList = (userid) => __awaiter(this, void 0, void 0, function* () {
    var existinglist = yield IndividualData.find({
        status: parameters_1.dataCaptureRegistrationStatus.Pending,
        userid: userid
    });
    return existinglist;
});
exports.getUnApprovedIndividualDataList = () => __awaiter(this, void 0, void 0, function* () {
    var existinglist = yield IndividualData.find({
        status: parameters_1.dataCaptureRegistrationStatus.Submitted
    });
    return existinglist;
});
//# sourceMappingURL=individualDataQueries.js.map