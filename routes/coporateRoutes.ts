import { CoporateController } from "../controllers/coporateController";
import Auth from "../middleware/auth";

export const registerCoporateRoutes = app => {
  var coporateController: CoporateController = new CoporateController();
  app
    .route("/api/coporate/createCoporateData")
    .post([Auth, coporateController.createCoporateData]);
  app
    .route("/api/coporate/updateCorporateData")
    .post([Auth, coporateController.updateCorporateData]);
  app
    .route("/api/coporate/submitCorporateData")
    .post([Auth, coporateController.submitCorporateData]);
  app
    .route("/api/coporate/returnCoporateData")
    .post([Auth, coporateController.returnCoporateData]);
  app
    .route("/api/coporate/approveCoporateData")
    .post([Auth, coporateController.approveCoporateData]);
  app
    .route("/api/coporate/getCoporateDataByMemebershipId/:membershipnumber")
    .get([Auth, coporateController.getCoporateDataByMemebershipId]);
  app
    .route("/api/coporate/getCoporateMemeberListIssuedCertificates")
    .get([Auth, coporateController.getCoporateMemeberListIssuedCertificates]);
  app
    .route("/api/coporate/getUnApprovedCoporateDataList")
    .get([Auth, coporateController.getUnApprovedCoporateDataList]);
  app
    .route("/api/coporate/getUnSubmittedCoporateDataList/:userid")
    .get([Auth, coporateController.getUnSubmittedCoporateDataList]);
};
