import { registerCoporateRoutes } from "./coporateRoutes";
import { registerCertificateRegisterRoutes } from "./certificateRegisterRoutes";
import { registerCorporateForwarderRoutes } from "./corporateForwarderRoutes";
import { registerIndividualForwarderRoutes } from "./individualForwarderRoutes";
import { registerAuthRoutes } from "./authRoutes";
import { registerIndividualRoutes } from "./individualRoutes";


export const initRoutes = app => {
  registerCoporateRoutes(app);
  registerCorporateForwarderRoutes(app);
  registerIndividualForwarderRoutes(app);
  registerCertificateRegisterRoutes(app);
  registerAuthRoutes(app);
  registerIndividualRoutes(app);
};
