const auth = require('../middleware/auth');
const _ = require('lodash');
const { IndividualForwarder } = require('../models/individualforwarder');
const { IndividualImport } = require('../models/individualimport');
const { CorporateForwarder } = require('../models/corporateforwarder');
const { CorporateImport } = require('../models/corporateimport');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


router.get('/individual/', auth, async (req, res) => {
    const imports = await IndividualImport.find().sort('surname');
    if (!imports) res.status(404).send("Records not found");
    await imports.forEach(element => {
            let forwarder = new IndividualForwarder({
                surname: element.surname,
                firstname: element.firstname,
                lastname: element.lastname,
                membershipnumber: element.membershipnumber,
                status: 0
            });

            forwarder = forwarder.save(forwarder);
    });
    //const forwarders = IndividualForwarder.find({ 'status': 0 }).sort('surname');
    res.send(imports);
});

router.get('/corporate/', auth, async (req, res) => {
    const imports = await CorporateImport.find({}).sort('companyname');
    if (!imports) res.status(404).send("Records not found");
    await imports.forEach(element => {
        // const rec = CorporateForwarder.find({ membershipnumber: element.membershipnumber });
        // if (rec) {
        //     return;
        // } else {
            let forwarder = new CorporateForwarder({
                companyname: element.companyname,
                membershipnumber: element.membershipnumber,
                status: 0
            });

            forwarder = forwarder.save(forwarder);
        //}
    });
    const forwarders = await CorporateForwarder.find({ 'status': 0 }).sort('companyname');
    res.send(forwarders);
});

module.exports = router; 