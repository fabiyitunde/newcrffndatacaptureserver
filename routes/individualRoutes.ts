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
    .route("/api/individual/getIndividualDataById/:id")
    .get([Auth, individualController.getIndividualDataById]);

  app
    .route("/api/individual/getIndividualMemeberListIssuedCertificates")
    .get([Auth, individualController.getIndividualMemeberListIssuedCertificates]);
  app
    .route("/api/individual/getUnApprovedIndividualDataList")
    .get([Auth, individualController.getUnApprovedIndividualDataList]);
  app
    .route("/api/individual/getUnSubmittedIndividualDataList/:userid")
    .get([Auth, individualController.getUnSubmittedIndividualDataList]);

  app
    .route("/api/individual/getStatesList")
    .get([Auth, individualController.getStatesList]);

  app
    .route("/api/individual/getLGAList")
    .get([Auth, individualController.getLGAList]);
};
