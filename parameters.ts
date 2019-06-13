export const dataCaptureRegistrationStatus = {
  Pending: 1,
  Submitted: 2,
  Approved: 3,
  getDescription: (value: number) => {
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
export const CertificateRegisterStatus = {
  Pending: 1,
  Submitted: 2,
  Approved: 3,
  Issued: 4,
  getDescription: (value: number) => {
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
export const postalChannels = {
  crffnDataCapture: "crffnDataCapture"
};
export const postalTopics = {
  coporateDataCaptureApproved: "coporateDataCaptureApproved",
  individualDataCaptureApproved: "individualDataCaptureApproved",
  corporateForwarderUpdated: "corporateForwarderUpdated",
  individualForwarderUpdated: "individualForwarderUpdated",
  certificateRegisterApproved: "certificateRegisterApproved"
};
export const FreightForwaderCategory = {
  Staff: 1,
  Executive: 2,
  Company: 3,
  ServiceProvider: 4,

  getDescription: (value: number) => {
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

  // getList: () => {
  //   return Object.keys(FreightForwaderCategory);

  // }
};

export const forwarderRecordStatus = {
  Pending: 0,
  Treated: 1,
  getDescription: (value: number) => {
    switch (value) {
      case 1:
        return "Pending";
      default:
        return "Treated";

    }
  }
};

export const userType = {
  Admin: 1,
  DataEntry: 2,
  Approval: 3,
  getDescription: (value: number) => {
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


