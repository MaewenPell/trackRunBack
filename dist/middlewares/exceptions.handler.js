"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExceptionsHandler = void 0;
/**
 * Global Error Management Middleware
 *
 * @param err - Express Error
 * @param req - Initial Request
 * @param res - Response Object
 * @param next - Next middleware if existing
 *
 * @see https://expressjs.com/en/guide/error-handling.html
 */
const ExceptionsHandler = (err, req, res, next) => {
    // The default error handler (see doc).
    if (res.headersSent) {
        return next(err);
    }
    // Our errors
    if (err.status && err.error) {
        return res
            .status(err.status)
            .json({ error: err.error });
    }
    // Other case 500
    return res
        .status(500)
        .json("Internal Error");
};
exports.ExceptionsHandler = ExceptionsHandler;
