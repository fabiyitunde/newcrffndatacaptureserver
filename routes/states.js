const auth = require('../middleware/auth');
const _ = require('lodash');
const {State} = require('../models/state');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', auth, async (req, res) => {
    const states = await State.find().sort('description');
    res.send(states);
});

router.post('/', async (req, res) => {
  try {
    // let state = await State.findOne({ code: req.body.code });
    // if (state) return res.status(400).send('Code already exist.');
   const state = new State(_.pick(req.body, ['code', 'description']));  
    await state.save();
    res.send(state);
    
  } catch (error) {
    res.status(400).send(error.message);
  }
 
 
});

module.exports = router; 
