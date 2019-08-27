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
const individualdata_1 = require("../../models/individualdata");
const parameters_1 = require("../../parameters");
const mongoose = require("mongoose");
const IndividualData = mongoose.model("IndividualData", individualdata_1.IndividualDataSchema);
function uploadIndividualPhoto(mongo_id, membershipnumber, passportphotograph) {
    return __awaiter(this, void 0, void 0, function* () {
        // const existingrecordByMongoId: any = await IndividualData.findOne({
        //   _id: mongo_id
        // });
        const existingrecordByMembershipNumber = yield IndividualData.findOne({
            membershipnumber: membershipnumber
        });
        // if (existingrecordByMembershipNumber) {
        //   if (existingrecordByMembershipNumber._id != existingrecordByMongoId._id)
        //     throw "This Membership Number Already Assigned";
        // }
        if (existingrecordByMembershipNumber.status != parameters_1.dataCaptureRegistrationStatus.Pending)
            throw "The Record Is No More Pending";
        //console.log()
        var updaterec = {
            //membershipnumber: membershipnumber,
            passportphotograph: passportphotograph
        };
        console.log(updaterec);
        yield IndividualData.findOneAndUpdate({ membershipnumber: membershipnumber }, updaterec);
    });
}
exports.uploadIndividualPhoto = uploadIndividualPhoto;
//# sourceMappingURL=uploadIndividualPhoto.js.map