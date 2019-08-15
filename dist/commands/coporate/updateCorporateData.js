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
function updateCorporateData(mongo_id, membershipnumber, companyname, category, address, association, email, contactperson, isOperatingAtAirPort, isOperatingAtLandBorder, isOperatingAtSeaPort, operationStartDate, phoneNumber, postalAddress, rCNos, statecode, website) {
    return __awaiter(this, void 0, void 0, function* () {
        const existingrecordByMongoId = yield CoporateData.findOne({
            _id: mongo_id
        });
        // const existingrecordByMembershipNumber: any = await CoporateData.findOne({
        //   membershipnumber: membershipnumber
        // });
        // if (existingrecordByMembershipNumber) {
        //   if (existingrecordByMembershipNumber._id != existingrecordByMongoId._id)
        //     throw "This Memebership Number Already Assigned";
        // }
        if (existingrecordByMongoId.status != parameters_1.dataCaptureRegistrationStatus.Pending)
            throw "The Record Is No More Pending";
        const statelist = yield parameterQueries_1.getStateList();
        const categoryobj = parameterQueries_1.getCategory(category);
        const existingstate = statelist.find(a => a.code == statecode);
        var updaterec = {
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
            website: website
        };
        yield CoporateData.findOneAndUpdate({ _id: mongo_id }, updaterec);
    });
}
exports.updateCorporateData = updateCorporateData;
//# sourceMappingURL=updateCorporateData.js.map