import { CorporateForwarderController } from "../controllers/corporateForwarderController";
import Auth from "../middleware/auth";

export const registerCorporateForwarderRoutes = app => {
    var corporateForwarderController: CorporateForwarderController = new CorporateForwarderController();

    app
        .route("/api/corporateforwarder/createCorporateForwarder")
        .post([Auth, corporateForwarderController.createCorporateForwarder]);

    app
        .route("/api/corporateforwarder/updateCorporateForwarder")
        .post([Auth, corporateForwarderController.updateCorporateForwarder]);

    app
        .route("/api/corporateforwarder/getCorporateForwarderById/:id")
        .get([Auth, corporateForwarderController.getCorporateForwarderById]);

    app
        .route("/api/corporateforwarder/getCorporateForwarderByMembershipNumber/:membershipnumber")
        .get([Auth, corporateForwarderController.getCorporateForwarderByMembershipNumber]);

    app
        .route("/api/corporateforwarder/getUnSubmittedCorporateForwarderList")
        .get([Auth, corporateForwarderController.getUnSubmittedCorporateForwarderList]);

    app
        .route("/api/corporateforwarder/getForwarderCategoryList")
        .get([Auth, corporateForwarderController.getForwarderCategoryList]);

};