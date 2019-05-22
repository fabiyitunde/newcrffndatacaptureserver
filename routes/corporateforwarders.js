const auth = require('../middleware/auth');
const _ = require('lodash');
const { CorporateForwarder } = require('../models/corporateforwarder');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', auth, async (req, res) => {
    const forwaders = await CorporateForwarder.find({ 'status': 0 }).sort('companyname');
    res.send(forwaders);
});

//Get list
router.get('/corporatelist', auth, async (req, res) => {
    const forwaders = await CorporateForwarder.find().sort('companyname');
    res.send(forwaders);
});

// Get a single record
router.get('/:id', async (req, res) => {
    const forwader = await CorporateForwarder.findById(req.params.id);

    if (!forwader) return res.status(404).send('The freightforwarder with the given ID was not found.');

    res.send(forwader);
});

router.post('/createcorporate', async (req, res) =>{
    
 
    let forwarder = new CorporateForwarder({
        companyname: req.body.companyname,
        membershipnumber: req.body.membershipnumber
    });
    console.log(forwarder);
    
    forwarder = await forwarder.save((err,res)=>{
        if (err) return res.status(404).send(err);
         res.send(forwarder);
    });
    //res.send(forwarder);
}); 

//Update the record
router.put('/editcorporate/:id', async (req, res) => {
     let forwarder = {
        companyname: req.body.companyname,
        membershipnumber: req.body.membershipnumber
     };

    CorporateForwarder.update({ _id: req.body._id }, forwarder, { new: true }, function (err, result) {
        if (err) return res.status(404).send(err);
        res.send(result);
    });
 });


module.exports = router; 