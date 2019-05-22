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
const createCoporateData_1 = require("../commands/coporate/createCoporateData");
const updateCorporateData_1 = require("../commands/coporate/updateCorporateData");
const submitCorporateData_1 = require("../commands/coporate/submitCorporateData");
const approveCoporateData_1 = require("../commands/coporate/approveCoporateData");
const returnCoporateData_1 = require("../commands/coporate/returnCoporateData");
const coporateDataQueries_1 = require("../queries/coporateDataQueries");
class CoporateController {
    createCoporateData(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { membershipnumber, companyname, category, address, association, email, contactperson, isOperatingAtAirPort, isOperatingAtLandBorder, isOperatingAtSeaPort, operationStartDate, phoneNumber, postalAddress, rCNos, statecode, website } = req.body;
                yield createCoporateData_1.createCoporateData(membershipnumber, companyname, category, address, association, email, contactperson, isOperatingAtAirPort, isOperatingAtLandBorder, isOperatingAtSeaPort, operationStartDate, phoneNumber, postalAddress, rCNos, statecode, website);
                var returndetail = yield coporateDataQueries_1.getCoporateDataByCRFFNNumber(membershipnumber);
                res.status(200).json(returndetail);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
    updateCorporateData(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { mongo_id, membershipnumber, companyname, category, address, association, email, contactperson, isOperatingAtAirPort, isOperatingAtLandBorder, isOperatingAtSeaPort, operationStartDate, phoneNumber, postalAddress, rCNos, statecode, website } = req.body;
                yield updateCorporateData_1.updateCorporateData(mongo_id, membershipnumber, companyname, category, address, association, email, contactperson, isOperatingAtAirPort, isOperatingAtLandBorder, isOperatingAtSeaPort, operationStartDate, phoneNumber, postalAddress, rCNos, statecode, website);
                var returndetail = yield coporateDataQueries_1.getCoporateDataByCRFFNNumber(membershipnumber);
                res.status(200).json(returndetail);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
    submitCorporateData(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { membershipnumber } = req.body;
                yield submitCorporateData_1.submitCorporateData(membershipnumber);
                var returndetail = yield coporateDataQueries_1.getCoporateDataByCRFFNNumber(membershipnumber);
                res.status(200).json(returndetail);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
    approveCoporateData(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { membershipnumber } = req.body;
                yield approveCoporateData_1.approveCoporateData(membershipnumber);
                var returndetail = yield coporateDataQueries_1.getCoporateDataByCRFFNNumber(membershipnumber);
                res.status(200).json(returndetail);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
    returnCoporateData(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { membershipnumber } = req.body;
                yield returnCoporateData_1.returnCoporateData(membershipnumber);
                var returndetail = yield coporateDataQueries_1.getCoporateDataByCRFFNNumber(membershipnumber);
                res.status(200).json(returndetail);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
    getCoporateDataByMemebershipId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { membershipnumber } = req.params;
                var returnobj = yield coporateDataQueries_1.getCoporateDataByCRFFNNumber(membershipnumber);
                res.status(200).json(returnobj);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
}
exports.CoporateController = CoporateController;
//# sourceMappingURL=coporateController.js.map