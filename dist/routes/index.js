"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coporateRoutes_1 = require("./coporateRoutes");
const certificateRegisterRoutes_1 = require("./certificateRegisterRoutes");
const corporateForwarderRoutes_1 = require("./corporateForwarderRoutes");
const individualForwarderRoutes_1 = require("./individualForwarderRoutes");
const authRoutes_1 = require("./authRoutes");
const individualRoutes_1 = require("./individualRoutes");
exports.initRoutes = app => {
    coporateRoutes_1.registerCoporateRoutes(app);
    corporateForwarderRoutes_1.registerCorporateForwarderRoutes(app);
    individualForwarderRoutes_1.registerIndividualForwarderRoutes(app);
    certificateRegisterRoutes_1.registerCertificateRegisterRoutes(app);
    authRoutes_1.registerAuthRoutes(app);
    individualRoutes_1.registerIndividualRoutes(app);
};
//# sourceMappingURL=index.js.map