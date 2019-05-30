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
const user_1 = require("../../models/user");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
//import { raiseUserCreatedEvent } from "../../domainevents/registrationEvents";
const User = mongoose.model("User", user_1.userSchema);
function createUser(userid, email, username, password, usertype) {
    return __awaiter(this, void 0, void 0, function* () {
        const salt = yield bcrypt.genSalt(10);
        var userinfo = {
            id: userid,
            name: username,
            email: email,
            password: yield bcrypt.hash(password, salt),
            usertype: usertype,
            dateCreated: new Date()
        };
        let user = yield User.findOne({ email: email });
        if (user)
            throw "User already registered.";
        user = new User(userinfo);
        yield user.save();
        //await raiseUserCreatedEvent(user.id, user);
        //   const token = user.generateAuthToken();
    });
}
exports.createUser = createUser;
//# sourceMappingURL=createUser.js.map