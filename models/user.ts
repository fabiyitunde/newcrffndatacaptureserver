import * as config from "config";
import * as jwt from "jsonwebtoken";
import * as Joi from "joi";
import * as mongoose from "mongoose";
import { DateTime } from "mssql";

export const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: "id is required"
    },
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
    usertype: Number,
    datecreated: {
        type: Date,
        default: Date.now
    }
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id, usertype: this.usertype, email: this.email }, config.get('jwtPrivateKey'));
    return token;
}

const User = mongoose.model('User', userSchema);

export function validateUser(user) {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required(),
        usertype: Joi.number()
    };

    return Joi.validate(user, schema);
}

//exports.User = User; 
//exports.validate = validateUser;