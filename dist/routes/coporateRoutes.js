"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coporateController_1 = require("../controllers/coporateController");
exports.registerCoporateRoutes = app => {
    var coporateController = new coporateController_1.CoporateController();
    app
        .route("/api/coporate/createCoporateData")
        .post(coporateController.createCoporateData);
    app
        .route("/api/coporate/updateCorporateData")
        .post(coporateController.updateCorporateData);
    app
        .route("/api/coporate/submitCorporateData")
        .post(coporateController.submitCorporateData);
    app
        .route("/api/coporate/returnCoporateData")
        .post(coporateController.returnCoporateData);
    app
        .route("/api/coporate/approveCoporateData")
        .post(coporateController.approveCoporateData);
};
//# sourceMappingURL=coporateRoutes.js.map