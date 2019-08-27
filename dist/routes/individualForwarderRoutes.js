"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const individualForwarderController_1 = require("../controllers/individualForwarderController");
const auth_1 = require("../middleware/auth");
exports.registerIndividualForwarderRoutes = app => {
    var individualForwarderController = new individualForwarderController_1.IndividualForwarderController();
    app
        .route("/api/individualforwarder/createIndividualForwarder")
        .post([auth_1.default, individualForwarderController.createIndividualForwarder]);
    app
        .route("/api/individualforwarder/updateIndividualForwarder")
        .post([auth_1.default, individualForwarderController.updateIndividualForwarder]);
    app
        .route("/api/individualforwarder/getIndividualForwarderById/:id")
        .get([auth_1.default, individualForwarderController.getIndividualForwarderById]);
    app
        .route("/api/individualforwarder/getIndividualForwarderByMembershipNumber/:membershipnumber")
        .get([auth_1.default, individualForwarderController.getIndividualForwarderByMembershipNumber]);
    app
        .route("/api/individualforwarder/getUnSubmittedIndividualForwarderList")
        .get([auth_1.default, individualForwarderController.getUnSubmittedIndividualForwarderList]);
};
//# sourceMappingURL=individualForwarderRoutes.js.map