"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnknownRoutesHandler = void 0;
const exceptions_1 = require("~~/utils/exceptions");
/**
 * For all undefined routes we are returning an error
 */
const UnknownRoutesHandler = () => {
    throw new exceptions_1.NotFoundException("The resource doesn't exist");
};
exports.UnknownRoutesHandler = UnknownRoutesHandler;
