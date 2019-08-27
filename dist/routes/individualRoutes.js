"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const individualController_1 = require("../controllers/individualController");
const auth_1 = require("../middleware/auth");
exports.registerIndividualRoutes = app => {
    var individualController = new individualController_1.IndividualController();
    app
        .route("/api/individual/createIndividualData")
        .post([auth_1.default, individualController.createIndividualData]);
    app
        .route("/api/individual/updateIndividualData")
        .post([auth_1.default, individualController.updateIndividualData]);
    app
        .route("/api/individual/submitIndividualData")
        .post([auth_1.default, individualController.submitIndividualData]);
    app
        .route("/api/individual/returnIndividualData")
        .post([auth_1.default, individualController.returnIndividualData]);
    app
        .route("/api/individual/approveIndividualData")
        .post([auth_1.default, individualController.approveIndividualData]);
    app
        .route("/api/individual/getIndividualDataByMemebershipId/:membershipnumber")
        .get([auth_1.default, individualController.getIndividualDataByMemebershipId]);
    app
        .route("/api/individual/getIndividualDataById/:id")
        .get([auth_1.default, individualController.getIndividualDataById]);
    app
        .route("/api/individual/getIndividualMemeberListIssuedCertificates")
        .get([auth_1.default, individualController.getIndividualMemeberListIssuedCertificates]);
    app
        .route("/api/individual/getUnApprovedIndividualDataList")
        .get([auth_1.default, individualController.getUnApprovedIndividualDataList]);
    app
        .route("/api/individual/getUnSubmittedIndividualDataList/:userid")
        .get([auth_1.default, individualController.getUnSubmittedIndividualDataList]);
    app
        .route("/api/individual/getStatesList")
        .get([auth_1.default, individualController.getStatesList]);
    app
        .route("/api/individual/getLGAList/:statecode")
        .get([auth_1.default, individualController.getLGAList]);
    app
        .route("/api/individual/getIndividualDataByMembershipNumber/:membershipnumber")
        .get([individualController.getIndividualDataByMembershipNumber]);
    app
        .route("/api/individual/uploadIndividualPassportPhoto")
        .post([auth_1.default, individualController.uploadIndividualPassportPhoto]);
};
//# sourceMappingURL=individualRoutes.js.map