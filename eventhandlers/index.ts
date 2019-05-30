import { initializeCRFFNCRNSyncronizationHandlers } from "../eventhandlers/CRFFNCRMSyncronizationHandler";
import { corporateForwarderUpdatedEventHandler } from "../eventhandlers/corporateForwarderEventHandler";
import { individualForwarderUpdatedEventHandler } from "../eventhandlers/individualForwarderEventHandler";
import { certificateRegisterApprovedEventHandler } from "../eventhandlers/certificateRegisterEventHandler";
import { initializeIndividualCRMSyncronizationHandlers } from "../eventhandlers/IndividualCRMSynchronizationHandler";

export const initHandlers = () => {
  initializeCRFFNCRNSyncronizationHandlers();
  corporateForwarderUpdatedEventHandler();
  individualForwarderUpdatedEventHandler();
  certificateRegisterApprovedEventHandler();
  initializeIndividualCRMSyncronizationHandlers();
};
