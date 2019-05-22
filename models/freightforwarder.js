const Joi = require('joi');
const mongoose = require('mongoose');

const freightForwarderSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    regid: {
        type: String,
        required: true,        
        unique: true
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    phonenumber: {
        type: String,
        required: true,
        minlength: 11,
        maxlength: 12
    },
    address: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    category: {
        type: String,
        required: true
    },
    stateid: {
        type: String,
        required: true
    },
    userid: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        required: true,
        default: Date.now
    },
    status: {
        type: Number,
        enum:[0,1,2],
        default: 0
    },
    image:String,
    membershipnumber: {
        type: String,
    }
});

const FreightForwarder = mongoose.model('FreightForwarder', freightForwarderSchema);

function validateFreightForwarder(freightForwarderSchema) {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        regid: Joi.string().required(),
        email: Joi.string().min(5).max(255).required().email(),
        phonenumber : Joi.string().min(11).max(12).required(),
        address : Joi.string().required(),
        category : Joi.string().required(),
        stateid : Joi.string().required(),
        // status : Joi.number(),
        // _id : Joi.string(),
        // dateCreated : Joi.date().required(),
        // image : Joi.string(),
        // userid : Joi.string().required(),
        // __v : Joi.number()
    };

    return Joi.validate(freightForwarderSchema, schema);
}

exports.FreightForwarder = FreightForwarder;
exports.validate = validateFreightForwarder;