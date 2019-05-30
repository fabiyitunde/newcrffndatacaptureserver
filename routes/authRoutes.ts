import { AuthController } from "../controllers/authController";

export const registerAuthRoutes = app => {
  var authController: AuthController = new AuthController();
  app.route("/api/auth/register").post(authController.createUser);
  app.route("/api/auth").post(authController.authenticateUser);
  app.route("/api/auth/access-token").post(authController.signInWithToken);
};
