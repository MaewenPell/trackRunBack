"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const config_1 = require("~/config");
const trainings_controller_1 = require("~~/resources/trainings/trainings.controller");
const unknownRoutes_handler_1 = require("~~/middlewares/unknownRoutes.handler");
const app = (0, express_1.default)();
;
app.use((0, cors_1.default)(config_1.options));
app.use(express_1.default.json());
app.use('/trainings', trainings_controller_1.TrainingController);
app.all('*', unknownRoutes_handler_1.UnknownRoutesHandler);
app.listen(config_1.config.API_PORT, () => console.log(`Listening on ${config_1.config.API_PORT}`));
