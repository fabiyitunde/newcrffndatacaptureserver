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
function updateCertificateRegister(mongo_id, membershipnumber, name, categorycode, categorydescription, userid) {
    return __awaiter(this, void 0, void 0, function* () {
        const existingrecordByMongoId = yield CertificateRegister.findOne({
            _id: mongo_id
        });
        if (existingrecordByMongoId.status != parameters_1.CertificateRegisterStatus.Pending)
            throw "The Record Is No More Pending";
        // const existingrecordByMembershipNumber: any = await CertificateRegister.findOne({
        //     membershipnumber: membershipnumber
        // });
        // if (existingrecordByMembershipNumber) throw "Membership Number Already exist.";
        ////const categoryobj: string = FreightForwaderCategory.getDescription(category);
        //console.log(existingrecordByMongoId);
        //console.log(category);
        //console.log(categoryobj);
        var updaterec = {
            //_id : mongo_id,
            membershipnumber: membershipnumber,
            name: name,
            category: { code: categorycode, description: categorydescription },
            status: parameters_1.CertificateRegisterStatus.Pending,
            userid: userid
        };
        //var certificateregister = new CertificateRegister(newrec);
        //const ID = mongoose.Types.ObjectId(mongo_id);
        //console.log(updaterec);
        //console.log(ID);
        yield CertificateRegister.findOneAndUpdate({ _id: mongo_id }, updaterec);
    });
}
exports.updateCertificateRegister = updateCertificateRegister;
//# sourceMappingURL=updateCertificateRegister.js.map