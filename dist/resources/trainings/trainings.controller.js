"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainingController = void 0;
const express_1 = require("express");
const trainings_service_1 = require("./trainings.service");
const exceptions_1 = require("~~/utils/exceptions");
// We use a Express Router, allowing us to create routes outside src/index.ts
const TrainingController = (0, express_1.Router)();
exports.TrainingController = TrainingController;
const service = new trainings_service_1.TrainingService();
// Find ALL trainings
TrainingController.get('/', (req, res) => {
    return res
        .status(200)
        .json(service.findAll());
});
// Find specific training
TrainingController.get("/:id", (req, res) => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) {
        throw new exceptions_1.BadRequestException("Bad ID");
    }
    const t = service.findOne(id);
    if (!t) {
        throw new exceptions_1.NotFoundException("Training Not Found");
    }
    return res
        .status(200)
        .json(t);
});
// Create training
TrainingController.post('/', (req, res) => {
    const newTraining = service.create(req.body);
    return res
        .status(201)
        .json(newTraining);
});
// Update Training
TrainingController.patch('/:id', (req, res) => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) {
        throw new exceptions_1.BadRequestException('Bad ID');
    }
    const UpdatedTraining = service.update(req.body, id);
    return res
        .status(200)
        .json(UpdatedTraining);
});
// Delete Training
TrainingController.delete("/:id", (req, res) => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) {
        throw new exceptions_1.BadRequestException('Bad ID');
    }
    return res
        .status(200)
        .json(service.delete(id));
});
