import * as mongoose from "mongoose";

export const individualforwarderSchema = new mongoose.Schema({

  firstname: {
    type: String,
    required: true
  },
  middlename: {
    type: String,
  },
  surname: {
    type: String,
    required: true
  },
  membershipnumber: {
    type: String,
    unique: true,
    required: true
  },
  status: {
    type: Number,
    enum: [0, 1],
    default: 0
  },
  userid: {
    type: String,
    //required: true
  }
});

