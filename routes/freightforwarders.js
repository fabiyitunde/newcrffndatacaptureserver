const { FreightForwarder, validate } = require('../models/freightforwarder');
const { IndividualForwarder } = require('../models/individualforwarder');
const { CorporateForwarder } = require('../models/corporateforwarder');
//const { State } = require('../models/state')
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const _ = require('lodash');
const auth = require('../middleware/auth');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const fs = require('fs');
require('string.prototype.startswith');

// Get List
router.get('/', async (req, res) => {
    //const freightforwarders = await FreightForwarder.find().sort('name');
    const freightforwarders = await FreightForwarder.find().sort({ _id: -1 })
    let forwarders = [];
    freightforwarders.forEach(element => {
        let forwarder = {
            _id: element._id,
            name: element.name,
            email: element.email,
            regid: element.regid,
            stateid: element.stateid,
            phonenumber: element.phonenumber,
            address: element.address,
            category: element.category,
            userid: element.userid,
            status: element.status,
            dateCreated: element.dateCreated,
            membershipnumber: element.membershipnumber
        }
        forwarders.push(forwarder);
    });
    res.send(forwarders);
});

// Create record
router.post('/create', auth, async (req, res) => {
    const { error } = validate(req.body);
    ///console.log(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //let freightforwarder = new Freightforwarder(_.pick(req.body, ['name', 'email', 'regid', 'phonenumber', 'address', 'category', 'stateid']));
    let freightforwarder = new FreightForwarder({
        name: req.body.name,
        regid: req.body.regid,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        address: req.body.address,
        category: req.body.category,
        stateid: req.body.stateid,
        image: "",
        membershipnumber: ""
    });
    console.log(freightforwarder);
    freightforwarder.userid = req.user._id;
    freightforwarder = await freightforwarder.save();

    res.send(freightforwarder);
});

// Update the record
router.put('/update/:id', auth, async (req, res) => {
    //const { error } = validate(req.body);
    //if (error) return res.status(400).send(error.details[0].message);

    let record = FreightForwarder.findOne({ _id: req.params.id });
    console.log(record);
    if (record.status > 0) return res.status(400).send("Record not in pending mode");

    //let freightforwarder = new FreightForwarder(_.pick(req.body, ['name', 'email', 'regid', 'phonenumber', 'address', 'category', 'stateid']));
    let freightforwarder = {
        name: req.body.name,
        email: req.body.email,
        regid: req.body.regid,
        stateid: req.body.stateid,
        phonenumber: req.body.phonenumber,
        address: req.body.address,
        category: req.body.category,
    };
    //record = await freightforwarder.save();
    await FreightForwarder.findByIdAndUpdate(req.params.id, freightforwarder, { new: true });

    if (!freightforwarder) return res.status(404).send('The Freight forwarder with the given ID was not found.');

    res.send(freightforwarder);
});

// Delete a record
router.delete('/delete/:id', auth, async (req, res) => {
    let record = FreightForwarder.findById(req.params.id);

    if (record.status != 0) return res.status(400).send("Record cannot be deleted because it is not in pending mode");

    const freightforwarder = await FreightForwarder.findByIdAndRemove(req.params.id);

    if (!freightforwarder) return res.status(404).send('The customer with the given ID was not found.');

    res.send(freightforwarder);
});

// Get a single record
router.get('/getsinglefreightforwarder/:id', async (req, res) => {
    const freightforwarder = await FreightForwarder.findById(req.params.id);

    if (!freightforwarder) return res.status(404).send('The freightforwarder with the given ID was not found.');

    res.send(freightforwarder);
});

// Get Unsubmitted records
router.get('/getUnsubmittedRecordsForUser', auth, async (req, res) => {
    //res.status(503).send({ token : "123456789"})
    //console.log(req.user._id);
    const freightforwarders = await FreightForwarder.find({ userid: req.user._id, status: 0 });
    //const staterec = await State.findOne({ userid: req.user._id, status: 0 });
    //console.log(freightforwarders);
    res.status(200).json(freightforwarders);//.send(freightforwarders);
});

// Submit the record
router.put('/submit/:id', async (req, res) => {
    let forwarder = FreightForwarder.findOne({ _id: req.params.id });
    if (forwarder.status > 0) return res.status(400).send("Record not in pending mode");
    let freightforwarder = {
        status: 1
    }
    FreightForwarder.update({ _id: req.params.id }, freightforwarder, { new: true }, function (err, result) {
        if (err) return res.status(404).send(err);
        res.send(result);
    });
});

// Get Unapproved records
router.get('/getUnapprovedRecords', auth, async (req, res) => {
    const freightforwarders = await FreightForwarder.find({ status: 1 }).sort({ _id: -1 });
    let forwarders = [];
    freightforwarders.forEach(element => {
        let forwarder = {
            _id: element._id,
            name: element.name,
            email: element.email,
            regid: element.regid,
            stateid: element.stateid,
            phonenumber: element.phonenumber,
            address: element.address,
            category: element.category,
            userid: element.userid,
            status: element.status,
            dateCreated: element.dateCreated
        }
        forwarders.push(forwarder);
    });
    // let forwarders = {
    //     name: element.name,
    //     email: element.email,
    //     regid: element.regid,
    //     stateid: element.stateid,
    //     phonenumber: element.phonenumber,
    //     address: element.address,
    //     category: element.category,
    // }

    res.status(200).send(forwarders);
});

// Approve the record
router.put('/approve/:id', auth, async (req, res) => {
    let forwarder = FreightForwarder.findOne({ _id: req.params.id });
    if (forwarder.status < 1) return res.status(400).send("Record not in submitted mode");
    if (forwarder.status > 1) return res.status(400).send("Record in approval mode");
    let freightforwarder = {
        status: 2
    }
    FreightForwarder.update({ _id: req.params.id }, freightforwarder, { new: true }, function (err, result) {
        if (err) return res.status(404).send(err);
        res.send(result);
    });
});

// Approve the record
router.put('/approveforwarder/', auth, async (req, res) => {
    let forwarder = FreightForwarder.findOne({ _id: req.body._id });
    if (forwarder.status < 1) return res.status(400).send("Record not in submitted mode");
    if (forwarder.status > 1) return res.status(400).send("Record in approval mode");
    // let existingforwarders = FreightForwarder.findOne({ membershipnumber: req.body.membershipnumber });
    // if (existingforwarders) return res.status(400).send("Membership Number already mapped");
    let freightforwarder = {}
    if (req.body.corporate) {
        //let corporate = CorporateForwarder.findOne({ _id: req.body.selectedid });
        //console.log(corporate.membershipnumber);
        freightforwarder = {
            status: 2,
            membershipnumber: req.body.membershipnumber
        }
        CorporateForwarder.findByIdAndUpdate({ _id: req.body.selectedid }, { status: 1 }, { new: true }, function (err, result) {
            console.log(result);
        });
    } else {
        //let individual = IndividualForwarder.findOne({ _id: req.body.selectedid });
        //console.log(individual); 
        freightforwarder = {
            status: 2,
            membershipnumber: req.body.membershipnumber
        }
        IndividualForwarder.findByIdAndUpdate({ _id: req.body.selectedid }, { status: 1 }, { new: true }, function (err, result) {
            console.log(result);
        });
    }

    // FreightForwarder.update({ _id: req.body._id }, freightforwarder, { new: true }, function (err, result) {
    //     if (err) return res.status(404).send(err);
    //     console.log(result);
    //     res.send(result);
    // });
    FreightForwarder.findByIdAndUpdate({ _id: req.body._id }, freightforwarder, { new: true }, function (err, result) {
        if (err) return res.status(404).send(err);
        //console.log(result);
        res.send(result);
    });
});

// Return the record
router.put('/return/:id', auth, async (req, res) => {
    let forwarder = FreightForwarder.findOne({ _id: req.params.id });
    if (forwarder.status < 1) return res.status(400).send("Record not in submitted mode");
    if (forwarder.status > 1) return res.status(400).send("Record not in submitted mode");
    let freightforwarder = {
        status: 0
    }
    FreightForwarder.update({ _id: req.params.id }, freightforwarder, { new: true }, function (err, result) {
        if (err) return res.status(404).send(err);
        res.send(result);
    });
});

// Upload image the record
router.put('/uploadimage/:id', upload.single('file'), async (req, res) => {
    if (!req.file.mimetype.startsWith('image/')) {
        return res.status(422).json({
            error: 'The uploaded file must be an image'
        });
    }

    let bitmap = fs.readFileSync(req.file.path);
    let convertedbaseimage = new Buffer(bitmap).toString('base64');
    let freightforwarder = {
        image: convertedbaseimage
    }
    FreightForwarder.update({ _id: req.params.id }, freightforwarder, { new: true }, function (err, result) {
        if (err) return res.status(404).send(err);
        res.send(result);
    });
});

// Get get User Posting Statistics
router.get('/getUserPostingStatistics', auth, async (req, res) => {
    const recordsnotsubmitted = await FreightForwarder.find({ userid: req.user._id, status: 0 }).count();
    const recordssubmitted = await FreightForwarder.find({ userid: req.user._id, status: 1 }).count();
    const recordsapproved = await FreightForwarder.find({ userid: req.user._id, status: 2 }).count();
    const recordsposted = await FreightForwarder.find({ userid: req.user._id }).count();
    let stats = {
        noofrecordspending: recordsnotsubmitted,
        noofrecordssubmitted: recordssubmitted,
        noofrecordsapproved: recordsapproved,
        noofrecordsposted: recordsposted
    };
    res.status(200).send(stats);
});

// Get get User Posting Statistics
router.get('/getPostingStatistics', auth, async (req, res) => {
    const recordsnotsubmitted = await FreightForwarder.find({ status: 0 }).count();
    const recordssubmitted = await FreightForwarder.find({ status: 1 }).count();
    const recordsapproved = await FreightForwarder.find({ status: 2 }).count();
    const recordsposted = await FreightForwarder.find().count();


    let stats = {
        noofrecordspending: recordsnotsubmitted,
        noofrecordssubmitted: recordssubmitted,
        noofrecordsapproved: recordsapproved,
        noofrecordsposted: recordsposted
    };
    res.status(200).send(stats);
});

// router.get('/getuserstats/:id', auth, async () => {
//     const recordsnotsubmitted = await FreightForwarder.find({ status: 0 }).count();
//     const recordssubmitted = await FreightForwarder.find({ status: 1 }).count();
//     const recordsapproved = await FreightForwarder.find({ status: 2 }).count();
//     const recordsposted = await FreightForwarder.find().count();


// });

module.exports = router; 