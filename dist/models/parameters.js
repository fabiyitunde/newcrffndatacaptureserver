"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.statetableSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 2,
        unique: true,
        message: "Code Must Be Unique...."
    },
    description: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255,
        unique: true,
        message: "Description Must Be Unique...."
    }
});
//# sourceMappingURL=parameters.js.map