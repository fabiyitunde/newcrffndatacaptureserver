const auth = require('../middleware/auth');
const _ = require('lodash');
const {IndividualForwarder} = require('../models/individualforwarder');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', auth, async (req, res) => {
   const forwaders = await IndividualForwarder.find({ 'status': 0 }).sort('surname');
   res.send(forwaders);
});

//Get list
router.get('/individuallist', auth, async (req, res) => {
     const forwaders = await IndividualForwarder.find().sort('surname');
     res.send(forwaders);
 });

// Get a single record
router.get('/:id', async (req, res) => {
    const forwader = await IndividualForwarder.findById(req.params.id);

    if (!forwader) return res.status(404).send('The Member with the given ID was not found.');

    res.send(forwader);
});

//Create a record 
router.post('/createindividual', async (req, res) =>{
   
    let forwarder = new IndividualForwarder({
        surname: req.body.surname,
        firstname: req.body.firstname,
        middlename: req.body.middlename,
        membershipnumber: req.body.membershipnumber
    });
    //console.log(forwarder);
    
    forwarder = await forwarder.save((err,res)=>{
        if (err) return res.status(404).send(err);
         res.send(forwarder);
    });
    //res.send(forwarder);
});

//Update the record
router.put('/editindividual/:id', async (req, res) => {
    let forwarder = {
        surname: req.body.surname,
        firstname: req.body.firstname,
        middlename: req.body.middlename,
        membershipnumber: req.body.membershipnumber
    };
    IndividualForwarder.update({ _id: req.body._id }, forwarder, { new: true }, function (err, result) {
        if (err) return res.status(404).send(err);
        res.send(result);
    });
    //await IndividualForwarder.findByIdAndUpdate({_id : req.body._id},forwarder, { new: true });

    // (!forwarder) return res.status(404).send('The Member with the given ID was not found.');
    //res.send(forwarder);
});

module.exports = router; 