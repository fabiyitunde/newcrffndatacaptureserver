import * as mongoose from "mongoose";

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
    enum: [0, 1, 2, 3],
    default: 0
  }
});
