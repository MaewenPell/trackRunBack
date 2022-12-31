"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainingController = void 0;
const express_1 = require("express");
const trainings_service_1 = require("./trainings.service");
const exceptions_1 = require("~~/utils/exceptions");
const mongodb_1 = require("mongodb");
const env_1 = require("~~/env");
const luxon_1 = require("luxon");
// We use a Express Router, allowing us to create routes outside src/index.ts
const TrainingController = (0, express_1.Router)();
exports.TrainingController = TrainingController;
const service = new trainings_service_1.TrainingService();
const client = new mongodb_1.MongoClient(env_1.uri);
const database = client.db('trackrun');
const collection = database.collection('trainings');
// Find ALL trainings
TrainingController.get('/', async (req, res) => {
    const results = await collection.find({});
    try {
        res.send(results);
    }
    catch (error) {
        res.status(500).send(error);
    }
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
TrainingController.post('/', async (req, res) => {
    const training = { id: 2, km: 51, type: "B", training_week: 2, start_date: luxon_1.DateTime.fromObject({ year: 2023, month: 2, day: 13 }).toISO() };
    const t = new trainings_service_1.TrainingModel({
        km: training.km,
        start_date: training.start_date,
        training_week: training.training_week,
        type: training.type
    });
    t.save((err => {
        console.log(err);
    }));
});
// // Update Training
// TrainingController.patch('/:id', (req, res) => {
//     const id = Number(req.params.id);
//     if (!Number.isInteger(id)) {
//         throw new BadRequestException('Bad ID');
//     }
//     const UpdatedTraining = service.update(training, id);
//     return res
//         .status(200)
//         .json(UpdatedTraining)
// })
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
