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
const parameterQueries_1 = require("../../queries/parameterQueries");
const CoporateData = mongoose.model("CoporateData", coporatedata_1.CoporateDataSchema);
function createCoporateData(membershipnumber, companyname, category, address, association, email, contactperson, isOperatingAtAirPort, isOperatingAtLandBorder, isOperatingAtSeaPort, operationStartDate, phoneNumber, postalAddress, rCNos, statecode, website, userid) {
    return __awaiter(this, void 0, void 0, function* () {
        const existingrecordWithEmail = yield CoporateData.findOne({
            email: email
        });
        if (existingrecordWithEmail)
            throw "Email Already exist.";
        const existingrecordWithCRFFNNumber = yield CoporateData.findOne({
            membershipnumber: membershipnumber
        });
        if (existingrecordWithCRFFNNumber)
            throw "CRFFN Number Already exist.";
        const statelist = yield parameterQueries_1.getStateList();
        //const categoryobj: any = getCategory(category);
        const existingstate = statelist.find(a => a.code == statecode);
        var newrec = {
            membershipnumber: membershipnumber,
            companyname: companyname,
            category: { code: category.code, description: category.description },
            address: address,
            association: association,
            state: { code: existingstate.code, description: existingstate.description },
            contactperson: contactperson,
            email: email,
            isOperatingAtAirPort: isOperatingAtAirPort,
            isOperatingAtLandBorder: isOperatingAtLandBorder,
            isOperatingAtSeaPort: isOperatingAtSeaPort,
            operationStartDate: operationStartDate,
            phoneNumber: phoneNumber,
            postalAddress: postalAddress,
            rCNos: rCNos,
            status: parameters_1.dataCaptureRegistrationStatus.Pending,
            website: website,
            userid: userid
        };
        var coporatedata = new CoporateData(newrec);
        yield coporatedata.save();
    });
}
exports.createCoporateData = createCoporateData;
//# sourceMappingURL=createCoporateData.js.map