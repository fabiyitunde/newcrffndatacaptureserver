"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.corporateForwarderSchema = new mongoose.Schema({
    companyname: {
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
//# sourceMappingURL=corporateforwarder.js.map