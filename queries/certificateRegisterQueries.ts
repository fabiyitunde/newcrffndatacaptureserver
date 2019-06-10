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
      { "category.code": FreightForwaderCategory.Company },
      { "category.code": FreightForwaderCategory.ServiceProvider }
    ]
  });
  return existinlist;
};

export const getIndividualMemeberListIssuedCertificates = async () => {
  var existinlist: any[] = await CertificateRegister.find({
    status: CertificateRegisterStatus.Issued,
    $or: [
      { "category.code": FreightForwaderCategory.Staff },
      { "category.code": FreightForwaderCategory.Executive }
    ]
  });
  return existinlist;
};

export const getUnSubmittedCertificateRegisterList = async (userid: string) => {
  var existinglist: any = await CertificateRegister.find({
    status: CertificateRegisterStatus.Pending,
    userid: userid
  });
  return existinglist;
};

export const getCertificateRegisterById = async (id: string) => {
  var existingrec: any = await CertificateRegister.findOne({
    _id: id
  });
  return existingrec;
};

export const getCertificateRegisterByMembershipNumber = async (membershipnumber: string) => {
  var existingrec: any = await CertificateRegister.findOne({
    membershipnumber: membershipnumber
  });
  return existingrec;
};

export const getUnApprovedCertificateRegisterList = async () => {
  var existinglist: any = await CertificateRegister.find({
    status: CertificateRegisterStatus.Submitted
  });
  return existinglist;
};

export const getUnIssuedCertificateRegisterList = async () => {
  var existinglist: any = await CertificateRegister.find({
    status: CertificateRegisterStatus.Approved
  });
  return existinglist;
};
