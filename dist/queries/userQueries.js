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
const user_1 = require("../models/user");
const mongoose = require("mongoose");
// import {
//   getDriverDetailsByUserId,
//   addextraData
// } from "../queries/driverDetailsQueries";
const User = mongoose.model("User", user_1.userSchema);
exports.getUserByUserId = (userid) => __awaiter(this, void 0, void 0, function* () {
    var userinfo = yield User.findOne({ id: userid });
    return userinfo;
});
exports.getUserByEmail = (email) => __awaiter(this, void 0, void 0, function* () {
    var userinfo = yield User.findOne({ email: email });
    return userinfo;
});
exports.getUserInfoWithoutPasswordById = (userid) => __awaiter(this, void 0, void 0, function* () {
    var user = yield User.findOne({ id: userid });
    return {
        id: user._id,
        name: user.name,
        email: user.email,
        usertype: user.usertype,
        dateCreated: user.dateCreated,
    };
});
//# sourceMappingURL=userQueries.js.map