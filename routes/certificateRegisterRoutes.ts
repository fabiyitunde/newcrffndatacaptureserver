import { CertificateRegisterController } from "../controllers/certificateRegisterController";
import Auth from "../middleware/auth";

export const registerCertificateRegisterRoutes = app => {
    var certificateRegisterController: CertificateRegisterController = new CertificateRegisterController();

    app
    .route("/api/certificateregister/updateCertificateRegister")
    .post([Auth, certificateRegisterController.updateCertificateRegister]);

    app
    .route("/api/certificateregister/submitCertificateRegister")
    .post([Auth, certificateRegisterController.submitCertificateRegister]);

    app
    .route("/api/certificateregister/approveCertificateRegister")
    .post([Auth, certificateRegisterController.approveCertificateRegister]);

    app
    .route("/api/certificateregister/returnCertificateRegister")
    .post([Auth, certificateRegisterController.returnCertificateRegister]);

    app
    .route("/api/certificateregister/issueCertificate")
    .post([Auth, certificateRegisterController.issueCertificate]);

    app
    .route("/api/certificateregister/getCertificateRegisterById/:id")
    .get([Auth, certificateRegisterController.getCertificateRegisterById]);

    app
    .route("/api/certificateregister/getCertificateRegisterByMembershipNumber/:membershipnumber")
    .get([Auth, certificateRegisterController.getCertificateRegisterByMembershipNumber]);

    app
    .route("/api/certificateregister/getUnSubmittedCertificateRegisterList/:userid")
    .get([Auth, certificateRegisterController.getUnSubmittedCertificateRegisterList]);

    app
    .route("/api/certificateregister/getUnApprovedCertificateRegisterList")
    .get([Auth, certificateRegisterController.getUnApprovedCertificateRegisterList]);

    app
    .route("/api/certificateregister/getUnIssuedCertificateRegisterList")
    .get([Auth, certificateRegisterController.getUnIssuedCertificateRegisterList]);
};