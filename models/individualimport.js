const config = require('config');

const mongoose = require('mongoose');

const individualimportSchema = new mongoose.Schema({

  firstname: {
    type: String,
  },
  middlename: {
    type: String,
  } ,
  surname: {
    type: String,
  },
  membershipnumber: {
    type: String, 
  }  
});

const IndividualImport = mongoose.model('IndividualImport', individualimportSchema);

exports.IndividualImport = IndividualImport; 