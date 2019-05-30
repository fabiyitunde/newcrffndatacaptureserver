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
const corporateforwarder_1 = require("../models/corporateforwarder");
const mongoose = require("mongoose");
const parameters_1 = require("../parameters");
const CorporateForwarder = mongoose.model("CorporateForwarder", corporateforwarder_1.corporateForwarderSchema);
//const CertificateRegister = mongoose.model("CertificateRegister", CertificateRegisterSchema);
exports.getUnSubmittedCorporateForwarderList = () => __awaiter(this, void 0, void 0, function* () {
    var existinglist = yield CorporateForwarder.find({
        status: parameters_1.forwarderRecordStatus.Pending
    });
    return existinglist;
});
exports.getCorporateForwarderById = (id) => __awaiter(this, void 0, void 0, function* () {
    var existingrec = yield CorporateForwarder.findOne({
        _id: id
    });
    return existingrec;
});
exports.getCorporateForwarderByMembershipNumber = (membershipnumber) => __awaiter(this, void 0, void 0, function* () {
    var existingrec = yield CorporateForwarder.findOne({
        membershipnumber: membershipnumber
    });
    return existingrec;
});
exports.getForwarderCategoryList = () => __awaiter(this, void 0, void 0, function* () {
    //var existinglist = Object.keys(FreightForwaderCategory.getList().map( (obj) ));
    //var existinglist: any [];
    return Object.keys(parameters_1.FreightForwaderCategory)
        .filter(key => typeof parameters_1.FreightForwaderCategory[key] === 'number')
        .map(key => ({ id: parameters_1.FreightForwaderCategory[key], name: key }));
    //return existinglist;
});
// export const getApprovedCertificateRegisterList = async () => {
//     var existinglist: any = await CertificateRegister.find({
//         status: CertificateRegisterStatus.Approved
//     });
//     return existinglist;
// };
//# sourceMappingURL=corporateForwarderQueries.js.map