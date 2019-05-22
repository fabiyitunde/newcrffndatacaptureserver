"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataCaptureRegistrationStatus = {
    Pending: 1,
    Submitted: 2,
    Approved: 3,
    getDescription: (value) => {
        switch (value) {
            case 1:
                return "Pending";
            case 2:
                return "Submitted";
            default:
                return "Approved";
        }
    }
};
exports.postalChannels = {
    crffnDataCapture: "crffnDataCapture"
};
exports.postalTopics = {
    coporateDataCaptureApproved: "coporateDataCaptureApproved"
};
//# sourceMappingURL=parameters.js.map