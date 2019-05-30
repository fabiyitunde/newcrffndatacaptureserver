import { IndividualForwarderController } from "../controllers/individualForwarderController";
import Auth from "../middleware/auth";

export const registerIndividualForwarderRoutes = app => {
    var individualForwarderController: IndividualForwarderController = new IndividualForwarderController();

    app
    .route("/api/individualforwarder/updateIndividualForwarder")
    .post([Auth, individualForwarderController.updateIndividualForwarder]);

    app
    .route("/api/individualforwarder/getIndividualForwarderById/:id")
    .get([Auth, individualForwarderController.getIndividualForwarderById]);

    app
    .route("/api/individualforwarder/getIndividualForwarderByMembershipNumber/:membershipnumber")
    .get([Auth, individualForwarderController.getIndividualForwarderByMembershipNumber]);

    app
    .route("/api/individualforwarder/getUnSubmittedIndividualForwarderList")
    .get([Auth, individualForwarderController.getUnSubmittedIndividualForwarderList]);
};