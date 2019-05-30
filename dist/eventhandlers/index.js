"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CRFFNCRMSyncronizationHandler_1 = require("../eventhandlers/CRFFNCRMSyncronizationHandler");
const corporateForwarderEventHandler_1 = require("../eventhandlers/corporateForwarderEventHandler");
const individualForwarderEventHandler_1 = require("../eventhandlers/individualForwarderEventHandler");
const certificateRegisterEventHandler_1 = require("../eventhandlers/certificateRegisterEventHandler");
const IndividualCRMSynchronizationHandler_1 = require("../eventhandlers/IndividualCRMSynchronizationHandler");
exports.initHandlers = () => {
    CRFFNCRMSyncronizationHandler_1.initializeCRFFNCRNSyncronizationHandlers();
    corporateForwarderEventHandler_1.corporateForwarderUpdatedEventHandler();
    individualForwarderEventHandler_1.individualForwarderUpdatedEventHandler();
    certificateRegisterEventHandler_1.certificateRegisterApprovedEventHandler();
    IndividualCRMSynchronizationHandler_1.initializeIndividualCRMSyncronizationHandlers();
};
//# sourceMappingURL=index.js.map