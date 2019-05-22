const config = require('config');

const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema({

  code: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 2,
    unique: true,
    message:"Code Must Be Unique...."
  },
  description: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 255,
    unique: true,
    message:"Description Must Be Unique...."  
  } 
});

const State = mongoose.model('State', stateSchema);

exports.State = State; 