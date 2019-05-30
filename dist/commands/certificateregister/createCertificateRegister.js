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
const CertificateRegister = mongoose.model("CertificateRegister", certificateregister_1.CertificateRegisterSchema);
function createCertificateRegister(membershipnumber, companyname, category) {
    return __awaiter(this, void 0, void 0, function* () {
        const existingrecordWithCRFFNNumber = yield CertificateRegister.findOne({
            membershipnumber: membershipnumber
        });
        if (existingrecordWithCRFFNNumber)
            throw "CRFFN Number Already exist.";
        var newrec = {
            membershipnumber: membershipnumber,
            companyname: companyname,
            category: category,
            status: parameters_1.CertificateRegisterStatus.Pending
        };
        var certificateregister = new CertificateRegister(newrec);
        yield certificateregister.save();
    });
}
exports.createCertificateRegister = createCertificateRegister;
//# sourceMappingURL=createCertificateRegister.js.map