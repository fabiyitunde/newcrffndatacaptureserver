const config = require('config');

const mongoose = require('mongoose');

const corporateForwarderSchema = new mongoose.Schema({

  companyname: {
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
  }
});

const CorporateForwarder = mongoose.model('CorporateForwarder', corporateForwarderSchema);

exports.CorporateForwarder = CorporateForwarder; 