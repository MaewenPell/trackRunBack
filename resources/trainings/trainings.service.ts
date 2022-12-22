import type { Training } from "~~/types/training";
import { trainings } from "~/data";
import { NotFoundException } from "~~/utils/exceptions";

export class TrainingService {
    // Local copy
    trainings: Training[] = trainings;

    findAll(): Training[] {
        return this.trainings;
    }

    findOne(id: number): Training | undefined {
        return this.trainings.find(t => t.id === id);
    }

    update(trainingData: Partial<Training>, id: number): Training | undefined {
        // TODO: check the request Data before saving
        const index = this.trainings.findIndex(t => t.id === id);

        if (index !== -1) {
            throw new NotFoundException('Training Not Found');
        }

        // We never save the ID
        delete trainingData.id;

        this.trainings[id] = { ...this.trainings[id], ...trainingData };

        return this.trainings[id];
    }

    create(trainingData: Omit<Training, 'id'>): Training {
        // Todo check request before saving
        const newTraining: Training = {
            ...trainingData,
            // TODO: Remove
            id: Math.floor(Math.random() * 100)
        }

        this.trainings.push(newTraining);
        return newTraining;
    }

    delete(id: number) {
        this.trainings = this.trainings.filter(t => t.id !== id);
    }
}