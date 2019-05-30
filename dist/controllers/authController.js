"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const createUser_1 = require("../commands/auth/createUser");
//import { confirmEmail } from "../commands/auth/confirmEmail";
const userQueries_1 = require("../queries/userQueries");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");
const newGuid_1 = require("../utilities/newGuid");
const parameters_1 = require("../parameters");
class AuthController {
    authenticateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const { error } = validate(req.body);
                if (error)
                    return res.status(400).send(error.details[0].message);
                var user = yield userQueries_1.getUserByEmail(email);
                if (!user)
                    return res.status(400).send("Invalid email or password1.");
                const validPassword = yield bcrypt.compare(password, user.password);
                if (!validPassword)
                    return res.status(400).send("Invalid email or password2.");
                //if (!user.isactive) throw "Email Account Not Verified Yet";
                const token = user.generateAuthToken();
                res.send({
                    access_token: token,
                    user: yield userQueries_1.getUserInfoWithoutPasswordById(user.id)
                });
            }
            catch (error) {
                console.log(error);
                res.status(400).json(error);
            }
        });
    }
    signInWithToken(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { access_token } = req.body;
                const decodeduserinfor = jwt.verify(access_token, config.get("jwtPrivateKey"));
                var user = yield userQueries_1.getUserByUserId(decodeduserinfor.id);
                const token = user.generateAuthToken();
                res.send({
                    access_token: token,
                    user: yield userQueries_1.getUserInfoWithoutPasswordById(user.id)
                });
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, displayName, password: pwd } = req.body;
                const userid = newGuid_1.getNewGUID();
                yield createUser_1.createUser(userid, email, displayName, pwd, parameters_1.userType.Admin);
                var user = yield userQueries_1.getUserByUserId(userid);
                const token = user.generateAuthToken();
                const { password } = user, userinfo = __rest(user, ["password"]);
                res
                    .header("x-auth-token", token)
                    .status(200)
                    .json({ success: true, access_token: token, user: userinfo });
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
    }
}
exports.AuthController = AuthController;
function validate(req) {
    const schema = {
        email: Joi.string()
            .min(5)
            .max(255)
            .required()
            .email(),
        password: Joi.string()
            .min(5)
            .max(255)
            .required()
    };
    return Joi.validate(req, schema);
}
//# sourceMappingURL=authController.js.map