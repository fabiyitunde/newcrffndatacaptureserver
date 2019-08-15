import * as mongoose from "mongoose";
import { string } from "joi";
import { DateTime } from "mssql";

export const CertificateRegisterSchema = new mongoose.Schema({
  
  membershipnumber: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  category: {
    type: { code: Number, description: String },
    required: true
  },
  status: {
    type: Number,
    enum: [1, 2, 3, 4],
    default: 1
  },
  userid : {
    type: String,
    required: true
  },
  extracted:{
    type:Boolean,
    default: false
  },
  date: {
    type:Date,
    default: Date.now
  }
});
