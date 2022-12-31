"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.config = void 0;
exports.config = {
    API_PORT: 3000
};
const allowedOrigins = ['http://localhost:4200'];
exports.options = {
    origin: allowedOrigins
};
