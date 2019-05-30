"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const certificateRegisterController_1 = require("../controllers/certificateRegisterController");
const auth_1 = require("../middleware/auth");
exports.registerCertificateRegisterRoutes = app => {
    var certificateRegisterController = new certificateRegisterController_1.CertificateRegisterController();
    app
        .route("/api/certificateregister/updateCertificateRegister")
        .post([auth_1.default, certificateRegisterController.updateCertificateRegister]);
    app
        .route("/api/certificateregister/submitCertificateRegister")
        .post([auth_1.default, certificateRegisterController.submitCertificateRegister]);
    app
        .route("/api/certificateregister/approveCertificateRegister")
        .post([auth_1.default, certificateRegisterController.approveCertificateRegister]);
    app
        .route("/api/certificateregister/issueCertificate")
        .post([auth_1.default, certificateRegisterController.issueCertificate]);
    app
        .route("/api/certificateregister/getCertificateRegisterById/:id")
        .get([auth_1.default, certificateRegisterController.getCertificateRegisterById]);
    app
        .route("/api/certificateregister/getCertificateRegisterByMembershipNumber/:membershipnumber")
        .get([auth_1.default, certificateRegisterController.getCertificateRegisterByMembershipNumber]);
    app
        .route("/api/certificateregister/getUnSubmittedCertificateRegisterList")
        .get([auth_1.default, certificateRegisterController.getUnSubmittedCertificateRegisterList]);
    app
        .route("/api/certificateregister/getUnApprovedCertificateRegisterList")
        .get([auth_1.default, certificateRegisterController.getUnApprovedCertificateRegisterList]);
    app
        .route("/api/certificateregister/getUnIssuedCertificateRegisterList")
        .get([auth_1.default, certificateRegisterController.getUnIssuedCertificateRegisterList]);
};
//# sourceMappingURL=certificateRegisterRoutes.js.map