"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uniqid = require("uniqid");
const uuid = require("uuid/v5");
exports.getNewGUID = () => {
    const uniqueid = uniqid();
    const newguid = uuid(uniqueid, uuid.DNS);
    return newguid;
};
//# sourceMappingURL=newGuid.js.map