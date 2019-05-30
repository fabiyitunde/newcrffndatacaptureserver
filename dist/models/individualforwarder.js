"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.individualforwarderSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    middlename: {
        type: String,
    },
    surname: {
        type: String,
        required: true
    },
    membershipnumber: {
        type: String,
        unique: true,
        required: true
    },
    status: {
        type: Number,
        enum: [0, 1],
        default: 0
    }
});
//# sourceMappingURL=individualforwarder.js.map