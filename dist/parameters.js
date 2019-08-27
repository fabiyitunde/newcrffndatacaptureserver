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
exports.CertificateRegisterStatus = {
    Pending: 1,
    Submitted: 2,
    Approved: 3,
    Issued: 4,
    getDescription: (value) => {
        switch (value) {
            case 1:
                return "Pending";
            case 2:
                return "Submitted";
            case 3:
                return "Approved";
            default:
                return "Issued";
        }
    }
};
exports.postalChannels = {
    crffnDataCapture: "crffnDataCapture"
};
exports.postalTopics = {
    coporateDataCaptureApproved: "coporateDataCaptureApproved",
    individualDataCaptureApproved: "individualDataCaptureApproved",
    corporateForwarderUpdated: "corporateForwarderUpdated",
    individualForwarderUpdated: "individualForwarderUpdated",
    certificateRegisterApproved: "certificateRegisterApproved"
};
exports.FreightForwaderCategory = {
    Staff: 1,
    Executive: 2,
    Company: 3,
    ServiceProvider: 4,
    getDescription: (value) => {
        switch (value) {
            case 1:
                return "Staff";
            case 2:
                return "Executive";
            case 3:
                return "Company";
            case 4:
                return "ServiceProvider";
            default:
                return "";
        }
    },
};
exports.forwarderRecordStatus = {
    Pending: 0,
    Treated: 1,
    getDescription: (value) => {
        switch (value) {
            case 1:
                return "Pending";
            default:
                return "Treated";
        }
    }
};
exports.userType = {
    Admin: 1,
    DataEntry: 2,
    Approval: 3,
    getDescription: (value) => {
        switch (value) {
            case 1:
                return { id: value, description: "Admin" };
            case 2:
                return { id: value, description: "Data Entry" };
            default:
                return { id: value, description: "Approval" };
        }
    }
};
exports.TypeOfID = {
    NationalIdCard: 1,
    DriversLicense: 2,
    InternationalPassport: 3,
    Others: 4,
    getDescription: (value) => {
        switch (value) {
            case 1:
                return "National Id Card";
            case 2:
                return "Drivers License";
            case 3:
                return "International Passport";
            case 4:
                return "Others";
            default:
                return "";
        }
    },
    getList: () => {
        return Object.keys(exports.TypeOfID);
    }
};
//# sourceMappingURL=parameters.js.map