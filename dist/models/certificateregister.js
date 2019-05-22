"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.CertificateRegisterSchema = new mongoose.Schema({
    membershipnumber: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        enum: [0, 1, 2, 3],
        default: 0
    }
});
//# sourceMappingURL=certificateregister.js.map