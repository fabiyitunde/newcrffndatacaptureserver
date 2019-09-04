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
const certificateregister_1 = require("../../models/certificateregister");
const parameters_1 = require("../../parameters");
const mongoose = require("mongoose");
const parameterQueries_1 = require("../../queries/parameterQueries");
const CertificateRegister = mongoose.model("CertificateRegister", certificateregister_1.CertificateRegisterSchema);
function createCertificateRegister(membershipnumber, name, category, userid) {
    return __awaiter(this, void 0, void 0, function* () {
        const existingrecordWithCRFFNNumber = yield CertificateRegister.findOne({
            membershipnumber: membershipnumber
        });
        if (existingrecordWithCRFFNNumber)
            throw "CRFFN Number Already exist.";
        const categoryobj = parameterQueries_1.getCategory(category);
        var newrec = {
            membershipnumber: membershipnumber,
            name: name,
            category: { code: category, description: categoryobj },
            status: parameters_1.CertificateRegisterStatus.Pending,
            userid: userid
        };
        console.log(newrec);
        var certificateregister = new CertificateRegister(newrec);
        yield certificateregister.save();
    });
}
exports.createCertificateRegister = createCertificateRegister;
//# sourceMappingURL=createCertificateRegister.js.map