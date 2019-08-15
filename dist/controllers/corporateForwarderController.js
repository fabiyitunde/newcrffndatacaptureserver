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
const updateCorporateForwarder_1 = require("../commands/corporateforwarder/updateCorporateForwarder");
const corporateForwarderQueries_1 = require("../queries/corporateForwarderQueries");
class CorporateForwarderController {
    updateCorporateForwarder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { mongo_id, membershipnumber, companyname, userid } = req.body;
                yield updateCorporateForwarder_1.updateCorporateForwarder(mongo_id, membershipnumber, companyname, userid);
                var returndetail = yield corporateForwarderQueries_1.getCorporateForwarderByMembershipNumber(membershipnumber);
                res.status(200).json(returndetail);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
    // public async createCertificateRegister(req: Request, res: Response) {
    //     try {
    //         const {
    //             membershipnumber,
    //             companyname,
    //             category
    //         } = req.body;
    //         await createCertificateRegister(
    //             membershipnumber,
    //             companyname,
    //             category
    //         );
    //         var returndetail = await getCertificateRegisterByMembershipNumber(membershipnumber);
    //         res.status(200).json(returndetail);
    //     } catch (error) {
    //         res.status(400).send(error);
    //     }
    // }
    getCorporateForwarderById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                var returnobj = yield corporateForwarderQueries_1.getCorporateForwarderById(id);
                res.status(200).json(returnobj);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
    getCorporateForwarderByMembershipNumber(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { membershipnumber } = req.params;
                var returnobj = yield corporateForwarderQueries_1.getCorporateForwarderByMembershipNumber(membershipnumber);
                res.status(200).json(returnobj);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
    getUnSubmittedCorporateForwarderList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var returnlist = yield corporateForwarderQueries_1.getUnSubmittedCorporateForwarderList();
                res.status(200).json(returnlist);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
    getForwarderCategoryList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var returnlist = yield corporateForwarderQueries_1.getForwarderCategoryList();
                res.status(200).json(returnlist);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
}
exports.CorporateForwarderController = CorporateForwarderController;
//# sourceMappingURL=corporateForwarderController.js.map