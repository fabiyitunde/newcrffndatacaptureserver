import { CertificateRegisterSchema } from "../models/certificateregister";
import {
  CertificateRegisterStatus,
  FreightForwaderCategory
} from "../parameters";

import * as mongoose from "mongoose";

const CertificateRegister = mongoose.model(
  "CertificateRegister",
  CertificateRegisterSchema
);

export const getCoporateMemeberListIssuedCertificates = async () => {
  var existinlist: any[] = await CertificateRegister.find({
    status: CertificateRegisterStatus.Issued,
    $or: [
      { category: FreightForwaderCategory.Company },
      { category: FreightForwaderCategory.ServiceProvider }
    ]
  });
  return existinlist;
};
