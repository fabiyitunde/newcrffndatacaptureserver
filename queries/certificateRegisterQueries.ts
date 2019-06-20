import { CertificateRegisterSchema } from "../models/certificateregister";
import {
  CertificateRegisterStatus,
  FreightForwaderCategory
} from "../parameters";

import * as mongoose from "mongoose";
import { exec } from "child_process";

const CertificateRegister = mongoose.model(
  "CertificateRegister",
  CertificateRegisterSchema
);

export const getCoporateMemeberListIssuedCertificates = async () => {
  const company = FreightForwaderCategory.Company;
  const serviceprovider = FreightForwaderCategory.ServiceProvider;
  var existinlist: any[] = await CertificateRegister.find({
    status: CertificateRegisterStatus.Issued,
    $or: [
      { "category.code": company },
      { "category.code": serviceprovider }
    ]
  });
  return existinlist;
};

export const getIndividualMemeberListIssuedCertificates = async () => {
  const staff = FreightForwaderCategory.Staff;
  const executive = FreightForwaderCategory.Executive;
  var existinlist: any[] = await CertificateRegister.find({
    status: CertificateRegisterStatus.Issued,
    $or: [
      { "category.code": staff },
      { "category.code": executive }
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
