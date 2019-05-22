const config = require('config');

const mongoose = require('mongoose');

const corporateimportSchema = new mongoose.Schema({

  companyname: {
    type: String,
  },
  membershipnumber: {
    type: String,
  },
  status: {
    type: Number,
    enum: [0, 1],
    default: 0
  }
});

const CorporateImport = mongoose.model('CorporateImport', corporateimportSchema);

exports.CorporateImport = CorporateImport; 