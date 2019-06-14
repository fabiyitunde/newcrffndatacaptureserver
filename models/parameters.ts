import * as mongoose from "mongoose";

export const statetableSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 2,
    unique: true,
    message: "Code Must Be Unique...."
  },
  description: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 255,
    unique: true,
    message: "Description Must Be Unique...."
  }
});

export const lgatableSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 255
  },
  statecode:{
    type: String,
    required: true,
  }
});
