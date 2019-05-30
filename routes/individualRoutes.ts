import { IndividualController } from "../controllers/individualController";
import Auth from "../middleware/auth";

export const registerIndividualRoutes = app => {
  var individualController: IndividualController = new IndividualController();
  app
    .route("/api/individual/createIndividualData")
    .post([Auth, individualController.createIndividualData]);
  app
    .route("/api/individual/updateIndividualData")
    .post([Auth, individualController.updateIndividualData]);
  app
    .route("/api/individual/submitIndividualData")
    .post([Auth, individualController.submitIndividualData]);
  app
    .route("/api/individual/returnIndividualData")
    .post([Auth, individualController.returnIndividualData]);
  app
    .route("/api/individual/approveIndividualData")
    .post([Auth, individualController.approveIndividualData]);
  app
    .route("/api/individual/getIndividualDataByMemebershipId/:membershipnumber")
    .get([Auth, individualController.getIndividualDataByMemebershipId]);
  app
    .route("/api/individual/getIndividualMemeberListIssuedCertificates")
    .post([Auth, individualController.getIndividualMemeberListIssuedCertificates]);
  app
    .route("/api/individual/getUnApprovedIndividualDataList")
    .post([Auth, individualController.getUnApprovedIndividualDataList]);
  app
    .route("/api/individual/getUnSubmittedIndividualDataList/:userid")
    .post([Auth, individualController.getUnSubmittedIndividualDataList]);
};
