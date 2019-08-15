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
function createIndividualData(membershipnumber, title, surname, othernames, category, address, email, phonenumber, statecode, lgacode, typeofid, idcardnumber, userid) {
    return __awaiter(this, void 0, void 0, function* () {
        const existingrecordWithEmail = yield IndividualData.findOne({
            email: email
        });
        if (existingrecordWithEmail)
            throw "Email Already exist.";
        const existingrecordWithCRFFNNumber = yield IndividualData.findOne({
            membershipnumber: membershipnumber
        });
        if (existingrecordWithCRFFNNumber)
            throw "CRFFN Number Already exist.";
        const statelist = yield parameterQueries_1.getStateList();
        const lgalist = yield parameterQueries_1.getLGAList(statecode);
        const categoryobj = parameterQueries_1.getCategory(category);
        const existingstate = statelist.find(a => a.code == statecode);
        const existinglga = lgalist.find(a => a.code == lgacode);
        var newrec = {
            membershipnumber: membershipnumber,
            title: title,
            surname: surname,
            othernames: othernames,
            category: { code: category.code, description: category.description },
            address: address,
            email: email,
            phonenumber: phonenumber,
            state: { code: existingstate.code, description: existingstate.description },
            lga: { code: existinglga.code, description: existinglga.description },
            typeofid: typeofid,
            idcardnumber: idcardnumber,
            status: parameters_1.dataCaptureRegistrationStatus.Pending,
            userid: userid
        };
        var individualdata = new IndividualData(newrec);
        yield individualdata.save();
    });
}
exports.createIndividualData = createIndividualData;
//# sourceMappingURL=createIndividualData.js.map