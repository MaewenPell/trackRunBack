import { NotFoundException } from "~~/utils/exceptions";
import { model, Schema } from "mongoose";
import { Training } from "~~/types/training";

export const trainingSchema = new Schema({
    training_week: {
        type: Number,
        required: true
    },
    km: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    start_date: {
        type: String,
        required: true
    },
});

export const TrainingModel = model("Training", trainingSchema);

export class TrainingService {
}