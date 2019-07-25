import * as mongoose from "mongoose";

export const CoporateDataSchema = new mongoose.Schema({
  membershipnumber: {
    type: String,
    unique: true,
    required: true
  },
  companyname: {
    type: String,
    required: true
  },
  category: {
    type: { code: Number, description: String },
    required: true
  },
  address: {
    type: String
  },
  association: {
    type: String
  },
  contactperson: {
    type: String
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  isOperatingAtAirPort: {
    type: Boolean
  },
  isOperatingAtLandBorder: {
    type: Boolean
  },
  isOperatingAtSeaPort: {
    type: Boolean
  },
  operationStartDate: {
    type: Date
  },
  phoneNumber: {
    type: String
  },
  postalAddress: {
    type: String
  },
  rCNos: {
    type: String
  },
  state: { type: { code: String, description: String } },
  website: {
    type: String
  },
  systemDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: Number,
    enum: [0, 1, 2],
    default: 0
  },
  userid : {
    type: String,
    required: true
  }
});
