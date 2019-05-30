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
const createIndividualData_1 = require("../commands/individual/createIndividualData");
const updateIndividualData_1 = require("../commands/individual/updateIndividualData");
const submitIndividualData_1 = require("../commands/individual/submitIndividualData");
const approveIndividualData_1 = require("../commands/individual/approveIndividualData");
const returnIndividualData_1 = require("../commands/individual/returnIndividualData");
const individualDataQueries_1 = require("../queries/individualDataQueries");
const certificateRegisterQueries_1 = require("../queries/certificateRegisterQueries");
class IndividualController {
    createIndividualData(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { membershipnumber, title, surname, othernames, category, address, email, phonenumber, statecode, lgacode, typeofid, idcardnumber } = req.body;
                yield createIndividualData_1.createIndividualData(membershipnumber, title, surname, othernames, category, address, email, phonenumber, statecode, lgacode, typeofid, idcardnumber);
                var returndetail = yield individualDataQueries_1.getIndividualDataByCRFFNNumber(membershipnumber);
                res.status(200).json(returndetail);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
    updateIndividualData(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { mongo_id, membershipnumber, title, surname, othernames, category, address, email, phonenumber, statecode, lgacode, typeofid, idcardnumber } = req.body;
                yield updateIndividualData_1.updateIndividualData(mongo_id, membershipnumber, title, surname, othernames, category, address, email, phonenumber, statecode, lgacode, typeofid, idcardnumber);
                var returndetail = yield individualDataQueries_1.getIndividualDataByCRFFNNumber(membershipnumber);
                res.status(200).json(returndetail);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
    submitIndividualData(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { membershipnumber } = req.body;
                yield submitIndividualData_1.submitIndividualData(membershipnumber);
                var returndetail = yield individualDataQueries_1.getIndividualDataByCRFFNNumber(membershipnumber);
                res.status(200).json(returndetail);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
    approveIndividualData(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { membershipnumber } = req.body;
                yield approveIndividualData_1.approveIndividualData(membershipnumber);
                var returndetail = yield individualDataQueries_1.getIndividualDataByCRFFNNumber(membershipnumber);
                res.status(200).json(returndetail);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
    returnIndividualData(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { membershipnumber } = req.body;
                yield returnIndividualData_1.returnIndividualData(membershipnumber);
                var returndetail = yield individualDataQueries_1.getIndividualDataByCRFFNNumber(membershipnumber);
                res.status(200).json(returndetail);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
    getIndividualDataByMemebershipId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { membershipnumber } = req.params;
                var returnobj = yield individualDataQueries_1.getIndividualDataByCRFFNNumber(membershipnumber);
                res.status(200).json(returnobj);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
    getIndividualMemeberListIssuedCertificates(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var returnlist = yield certificateRegisterQueries_1.getIndividualMemeberListIssuedCertificates();
                res.status(200).json(returnlist);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
    getUnSubmittedIndividualDataList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var returnlist = yield individualDataQueries_1.getUnSubmittedIndividualDataList();
                res.status(200).json(returnlist);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
    getUnApprovedIndividualDataList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var returnlist = yield individualDataQueries_1.getUnApprovedIndividualDataList();
                res.status(200).json(returnlist);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
}
exports.IndividualController = IndividualController;
//# sourceMappingURL=individualController.js.map