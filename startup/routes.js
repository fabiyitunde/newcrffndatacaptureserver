const express = require('express');
// const users = require('../routes/users');
// const auth = require('../routes/auth');
// const freightforwarders = require('../routes/freightforwarders');
// const states = require('../routes/states');
// const error = require('../middleware/error');
// const corporateforwarder = require('../routes/corporateforwarders');
// const individualforwarder = require('../routes/individualforwarders');
// const importforwarders = require('../routes/importforwarders');

module.exports = function(app) {
  app.use(express.json());
  
  // app.use('/api/users', users);
  // app.use('/api/auth', auth);
  // app.use('/api/states', states);
  // app.use('/api/freightforwarders', freightforwarders);
  // app.use('/api/freightforwarders/getsinglefreightforwarder', freightforwarders);
  // app.use('/api/freightforwarders/getUnsubmittedRecordsForUser', freightforwarders);
  // app.use('/api/freightforwarders/getUnapprovedRecords', freightforwarders);
  // app.use('/api/freightforwarders/uploadimage', freightforwarders);
  // app.use('/api/freightforwarders/submit/', freightforwarders);
  // app.use('/api/freightforwarders/return/', freightforwarders);
  // app.use('/api/freightforwarders/approve/', freightforwarders);
  // app.use('/api/freightforwarders/getUserPostingStatistics/', freightforwarders);
  // app.use('/api/freightforwarders/getPostingStatistics/', freightforwarders);
  // app.use('/api/individualforwarders', individualforwarder);
  // // app.use('/api/individualforwarders/individuallist', individualforwarder);
  // // app.use('/api/individualforwarders/createindividual', individualforwarder);
  // // app.use('/api/corporateforwarders/editindividual/:id', individualforwarder);
  // app.use('/api/importforwarders', importforwarders);
  // app.use('/api/corporateforwarders', corporateforwarder);
  // // app.use('/api/corporateforwarders/corporatelist', corporateforwarder);
  // // app.use('/api/corporateforwarders/createcorporate', corporateforwarder);
  // // app.use('/api/corporateforwarders/editcorporate/:id', corporateforwarder);


  
  //app.use(error);
}