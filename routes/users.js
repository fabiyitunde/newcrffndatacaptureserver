const auth = require('../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const { User, validate } = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/me', auth, async (req, res) => {

  console.log(req.user._id);
  //const user = await User.findById(req.user._id).select('-password');
  const user = await User.findOne({ _id: req.user._id }).select('-password');
  console.log(user);
  res.json(user);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send('User already registered.');

  //user = new User(_.pick(req.body, ['name', 'email', 'password']));

  const salt = await bcrypt.genSalt(10);
  let password = await bcrypt.hash(req.body.password, salt);
  //await user.save();
  let newuser = new User({
    name: req.body.name,
    email: req.body.email,
    password: password,
    isAdmin: req.body.isAdmin
  });
  newuser = await newuser.save();
  // const salt = await bcrypt.genSalt(10);
  // user.password = await bcrypt.hash(user.password, salt);
  // await user.save();

  const token = newuser.generateAuthToken();
  res.header('x-auth-token', token).send(_.pick(newuser, ['_id', 'name', 'email', 'isAdmin']));
});

router.put('/update/:id', auth, async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  //const salt = await bcrypt.genSalt(10);
  //let password = await bcrypt.hash(req.body.password, salt);
  if (user) {
    let edituser = {
      name: req.body.name,
      //password: password, 
      isAdmin: req.body.isAdmin
    };
    user = await User.findByIdAndUpdate(req.params.id, edituser, { new: true });
    const token = user.generateAuthToken();
    res.status(200).send(user);
    //res.header('x-auth-token', token).send(_.pick(user, ['_id', 'name', 'email', 'isAdmin']));
  }

  res.status(400).send("User record not found");
});


router.get('/', auth, async (req, res) => {
  const users = await User.find().sort('-name');
  res.json(users);
});

module.exports = router; 
