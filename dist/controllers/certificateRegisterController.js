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
const updateCertificateRegister_1 = require("../commands/certificateregister/updateCertificateRegister");
const submitCertificateRegister_1 = require("../commands/certificateregister/submitCertificateRegister");
const approveCertificateRegister_1 = require("../commands/certificateregister/approveCertificateRegister");
const returnCertificateRegister_1 = require("../commands/certificateregister/returnCertificateRegister");
const issueCertificate_1 = require("../commands/certificateregister/issueCertificate");
const certificateRegisterQueries_1 = require("../queries/certificateRegisterQueries");
class CertificateRegisterController {
    updateCertificateRegister(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { mongo_id, membershipnumber, name, categorycode, categorydescription, userid } = req.body;
                yield updateCertificateRegister_1.updateCertificateRegister(mongo_id, membershipnumber, name, categorycode, categorydescription, userid);
                var returndetail = yield certificateRegisterQueries_1.getCertificateRegisterByMembershipNumber(membershipnumber);
                res.status(200).json(returndetail);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
    submitCertificateRegister(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { membershipnumber } = req.body;
                yield submitCertificateRegister_1.submitCertificateRegister(membershipnumber);
                var returndetail = yield certificateRegisterQueries_1.getCertificateRegisterByMembershipNumber(membershipnumber);
                res.status(200).json(returndetail);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
    approveCertificateRegister(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { membershipnumber } = req.body;
                yield approveCertificateRegister_1.approveCertificateRegister(membershipnumber);
                var returndetail = yield certificateRegisterQueries_1.getCertificateRegisterByMembershipNumber(membershipnumber);
                res.status(200).json(returndetail);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
    returnCertificateRegister(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { membershipnumber } = req.body;
                yield returnCertificateRegister_1.returnCertificateRegister(membershipnumber);
                var returndetail = yield certificateRegisterQueries_1.getCertificateRegisterByMembershipNumber(membershipnumber);
                res.status(200).json(returndetail);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
    issueCertificate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { membershipnumber } = req.body;
                yield issueCertificate_1.issueCertificate(membershipnumber);
                var returndetail = yield certificateRegisterQueries_1.getCertificateRegisterByMembershipNumber(membershipnumber);
                res.status(200).json(returndetail);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
    getCertificateRegisterById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                var returnobj = yield certificateRegisterQueries_1.getCertificateRegisterById(id);
                res.status(200).json(returnobj);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
    getCertificateRegisterByMembershipNumber(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { membershipnumber } = req.params;
                var returnobj = yield certificateRegisterQueries_1.getCertificateRegisterByMembershipNumber(membershipnumber);
                res.status(200).json(returnobj);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
    getUnSubmittedCertificateRegisterList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userid } = req.params;
                var returnlist = yield certificateRegisterQueries_1.getUnSubmittedCertificateRegisterList(userid);
                res.status(200).json(returnlist);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
    getUnApprovedCertificateRegisterList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var returnlist = yield certificateRegisterQueries_1.getUnApprovedCertificateRegisterList();
                res.status(200).json(returnlist);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
    getUnIssuedCertificateRegisterList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var returnlist = yield certificateRegisterQueries_1.getUnIssuedCertificateRegisterList();
                res.status(200).json(returnlist);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
    getCertificateRegisterList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var returnlist = yield certificateRegisterQueries_1.getCertificateRegisterList();
                res.status(200).json(returnlist);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
}
exports.CertificateRegisterController = CertificateRegisterController;
//# sourceMappingURL=certificateRegisterController.js.map