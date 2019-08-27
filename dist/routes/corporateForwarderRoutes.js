"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const corporateForwarderController_1 = require("../controllers/corporateForwarderController");
const auth_1 = require("../middleware/auth");
exports.registerCorporateForwarderRoutes = app => {
    var corporateForwarderController = new corporateForwarderController_1.CorporateForwarderController();
    app
        .route("/api/corporateforwarder/createCorporateForwarder")
        .post([auth_1.default, corporateForwarderController.createCorporateForwarder]);
    app
        .route("/api/corporateforwarder/updateCorporateForwarder")
        .post([auth_1.default, corporateForwarderController.updateCorporateForwarder]);
    app
        .route("/api/corporateforwarder/getCorporateForwarderById/:id")
        .get([auth_1.default, corporateForwarderController.getCorporateForwarderById]);
    app
        .route("/api/corporateforwarder/getCorporateForwarderByMembershipNumber/:membershipnumber")
        .get([auth_1.default, corporateForwarderController.getCorporateForwarderByMembershipNumber]);
    app
        .route("/api/corporateforwarder/getUnSubmittedCorporateForwarderList")
        .get([auth_1.default, corporateForwarderController.getUnSubmittedCorporateForwarderList]);
    app
        .route("/api/corporateforwarder/getForwarderCategoryList")
        .get([auth_1.default, corporateForwarderController.getForwarderCategoryList]);
};
//# sourceMappingURL=corporateForwarderRoutes.js.map