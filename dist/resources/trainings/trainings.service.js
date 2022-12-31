"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainingService = exports.TrainingModel = exports.trainingSchema = void 0;
const data_1 = require("~/data");
const exceptions_1 = require("~~/utils/exceptions");
const mongoose_1 = require("mongoose");
exports.trainingSchema = new mongoose_1.Schema({
    training_week: {
        type: Number,
        required: true
    },
    km: {
        type: Number,
        required: true
    },
    type: {
        type: Number,
        required: true
    },
    start_date: {
        type: String,
        required: true
    },
});
exports.TrainingModel = (0, mongoose_1.model)("Training", exports.trainingSchema);
class TrainingService {
    constructor() {
        // Local copy
        this.trainings = data_1.trainings;
    }
    findAll() {
        return this.trainings;
    }
    findOne(id) {
        return this.trainings.find(t => t.id === id);
    }
    update(trainingData, id) {
        // TODO: check the request Data before saving
        const index = this.trainings.findIndex(t => t.id === id);
        if (index !== -1) {
            throw new exceptions_1.NotFoundException('Training Not Found');
        }
        // We never save the ID
        delete trainingData.id;
        this.trainings[id] = Object.assign(Object.assign({}, this.trainings[id]), trainingData);
        return this.trainings[id];
    }
    create(trainingData) {
    }
    delete(id) {
        this.trainings = this.trainings.filter(t => t.id !== id);
    }
}
exports.TrainingService = TrainingService;
