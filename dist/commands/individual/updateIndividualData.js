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
const individualdata_1 = require("../../models/individualdata");
const parameters_1 = require("../../parameters");
const mongoose = require("mongoose");
const parameterQueries_1 = require("../../queries/parameterQueries");
const IndividualData = mongoose.model("IndividualData", individualdata_1.IndividualDataSchema);
function updateIndividualData(mongo_id, membershipnumber, title, surname, othernames, category, address, email, phonenumber, statecode, lgacode, typeofid, idcardnumber) {
    return __awaiter(this, void 0, void 0, function* () {
        const existingrecordByMongoId = yield IndividualData.findOne({
            _id: mongo_id
        });
        const existingrecordByMembershipNumber = yield IndividualData.findOne({
            membershipnumber: membershipnumber
        });
        if (existingrecordByMembershipNumber) {
            if (existingrecordByMembershipNumber._id != existingrecordByMongoId._id)
                throw "This Memebership Number Already Assigned";
        }
        if (existingrecordByMongoId.status != parameters_1.dataCaptureRegistrationStatus.Pending)
            throw "The Record Is No More Pending";
        const statelist = yield parameterQueries_1.getStateList();
        const lgalist = yield parameterQueries_1.getLGAList();
        const existingstate = statelist.find(a => a.code == statecode);
        const existinglga = lgalist.find(a => a.code == lgacode);
        var updaterec = {
            membershipnumber: membershipnumber,
            title: title,
            surname: surname,
            othernames: othernames,
            category: category,
            address: address,
            email: email,
            phonenumber: phonenumber,
            state: { code: existingstate.code, description: existingstate.description },
            lga: { code: existinglga.code, description: existinglga.description },
            typeofid: typeofid,
            idcardnumber: idcardnumber,
            status: parameters_1.dataCaptureRegistrationStatus.Pending,
        };
        yield IndividualData.findOneAndUpdate({ _id: mongo_id }, updaterec);
    });
}
exports.updateIndividualData = updateIndividualData;
//# sourceMappingURL=updateIndividualData.js.map