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
const certificateregister_1 = require("../models/certificateregister");
const parameters_1 = require("../parameters");
const mongoose = require("mongoose");
const CertificateRegister = mongoose.model("CertificateRegister", certificateregister_1.CertificateRegisterSchema);
exports.getCoporateMemeberListIssuedCertificates = () => __awaiter(this, void 0, void 0, function* () {
    const company = parameters_1.FreightForwaderCategory.Company;
    const serviceprovider = parameters_1.FreightForwaderCategory.ServiceProvider;
    var existinlist = yield CertificateRegister.find({
        status: parameters_1.CertificateRegisterStatus.Issued,
        $or: [
            { "category.code": company },
            { "category.code": serviceprovider }
        ]
    });
    return existinlist;
});
exports.getIndividualMemeberListIssuedCertificates = () => __awaiter(this, void 0, void 0, function* () {
    const staff = parameters_1.FreightForwaderCategory.Staff;
    const executive = parameters_1.FreightForwaderCategory.Executive;
    var existinlist = yield CertificateRegister.find({
        status: parameters_1.CertificateRegisterStatus.Issued,
        $or: [
            { "category.code": staff },
            { "category.code": executive }
        ]
    });
    return existinlist;
});
exports.getUnSubmittedCertificateRegisterList = (userid) => __awaiter(this, void 0, void 0, function* () {
    var existinglist = yield CertificateRegister.find({
        status: parameters_1.CertificateRegisterStatus.Pending,
        userid: userid
    });
    return existinglist;
});
exports.getCertificateRegisterById = (id) => __awaiter(this, void 0, void 0, function* () {
    var existingrec = yield CertificateRegister.findOne({
        _id: id
    });
    return existingrec;
});
exports.getCertificateRegisterByMembershipNumber = (membershipnumber) => __awaiter(this, void 0, void 0, function* () {
    var existingrec = yield CertificateRegister.findOne({
        membershipnumber: membershipnumber
    });
    return existingrec;
});
exports.getUnApprovedCertificateRegisterList = () => __awaiter(this, void 0, void 0, function* () {
    var existinglist = yield CertificateRegister.find({
        status: parameters_1.CertificateRegisterStatus.Submitted
    });
    return existinglist;
});
exports.getUnIssuedCertificateRegisterList = () => __awaiter(this, void 0, void 0, function* () {
    var existinglist = yield CertificateRegister.find({
        status: parameters_1.CertificateRegisterStatus.Approved
    });
    return existinglist;
});
exports.getCertificateRegisterList = () => __awaiter(this, void 0, void 0, function* () {
    var existinglist = yield CertificateRegister.find({});
    return existinglist;
});
//# sourceMappingURL=certificateRegisterQueries.js.map