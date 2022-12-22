"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestException = exports.NotFoundException = void 0;
class Exception {
    constructor(error, status) {
        this.error = error;
        this.status = status;
    }
}
class NotFoundException extends Exception {
    constructor(error) {
        super(error, 404);
    }
}
exports.NotFoundException = NotFoundException;
class BadRequestException extends Exception {
    constructor(error) {
        super(error, 400);
    }
}
exports.BadRequestException = BadRequestException;
