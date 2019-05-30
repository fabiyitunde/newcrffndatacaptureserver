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
const updateIndividualForwarder_1 = require("../commands/individualforwarder/updateIndividualForwarder");
const individualForwarderQueries_1 = require("../queries/individualForwarderQueries");
class IndividualForwarderController {
    updateIndividualForwarder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { mongo_id, membershipnumber, name } = req.body;
                yield updateIndividualForwarder_1.updateIndividualForwarder(mongo_id, membershipnumber, name);
                var returndetail = yield individualForwarderQueries_1.getIndividualForwarderByMembershipNumber(membershipnumber);
                res.status(200).json(returndetail);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
    getIndividualForwarderById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                var returnobj = yield individualForwarderQueries_1.getIndividualForwarderById(id);
                res.status(200).json(returnobj);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
    getIndividualForwarderByMembershipNumber(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { membershipnumber } = req.params;
                var returnobj = yield individualForwarderQueries_1.getIndividualForwarderByMembershipNumber(membershipnumber);
                res.status(200).json(returnobj);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
    getUnSubmittedIndividualForwarderList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var returnlist = yield individualForwarderQueries_1.getUnSubmittedIndividualForwarderList();
                res.status(200).json(returnlist);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
}
exports.IndividualForwarderController = IndividualForwarderController;
//# sourceMappingURL=individualForwarderController.js.map