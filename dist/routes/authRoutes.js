"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authController_1 = require("../controllers/authController");
exports.registerAuthRoutes = app => {
    var authController = new authController_1.AuthController();
    app.route("/api/auth/register").post(authController.createUser);
    app.route("/api/auth").post(authController.authenticateUser);
    app.route("/api/auth/access-token").post(authController.signInWithToken);
};
//# sourceMappingURL=authRoutes.js.map