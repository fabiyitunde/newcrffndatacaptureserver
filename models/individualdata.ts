import * as mongoose from "mongoose";
import { RequestError } from "mssql";

export const IndividualDataSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  membershipnumber: {
    type: String,
    unique: true,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  othernames: {
    type: String,
    required: true
  },
  category: {
    type: { code: Number, description: String },
    required: true
  },
  address: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  phonenumber: {
    type: String,
    required: true
  },
  state: { type: { code: String, description: String } },
  lga: {
    type: { code: String, description: String }
  },
  typeofid: {
    type: Number,
    enum: [0, 1, 2],
    default: 0,
    required: true
  },
  idcardnumber: {
    type: String,
    required: true
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
  userid: {
    type: String,
    required: true
  }
});
