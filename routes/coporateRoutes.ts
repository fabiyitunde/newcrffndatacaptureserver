import { CoporateController } from "../controllers/coporateController";
import Auth from "../middleware/auth";

export const registerCoporateRoutes = app => {
  var coporateController: CoporateController = new CoporateController();
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
  app
    .route("/api/coporate/getCoporateDataByMemebershipId/:membershipnumber")
    .get(coporateController.getCoporateDataByMemebershipId);
  app
    .route("/api/coporate/getCoporateMemeberListIssuedCertificates")
    .post(coporateController.getCoporateMemeberListIssuedCertificates);
  app
    .route("/api/coporate/getUnApprovedCoporateDataList")
    .post(coporateController.getUnApprovedCoporateDataList);
  app
    .route("/api/coporate/getUnSubmittedCoporateDataList")
    .post(coporateController.getUnSubmittedCoporateDataList);
};
