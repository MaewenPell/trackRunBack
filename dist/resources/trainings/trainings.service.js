"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainingService = void 0;
const data_1 = require("~/data");
const exceptions_1 = require("~~/utils/exceptions");
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
        // Todo check request before saving
        const newTraining = Object.assign(Object.assign({}, trainingData), { 
            // TODO: Remove
            id: Math.floor(Math.random() * 100) });
        this.trainings.push(newTraining);
        return newTraining;
    }
    delete(id) {
        this.trainings = this.trainings.filter(t => t.id !== id);
    }
}
exports.TrainingService = TrainingService;
