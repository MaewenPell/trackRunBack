import { Router } from "express";
import { TrainingService } from "./trainings.service";
import { BadRequestException, NotFoundException } from "~~/utils/exceptions";

// We use a Express Router, allowing us to create routes outside src/index.ts
const TrainingController = Router();

const service = new TrainingService();

// Find ALL trainings
TrainingController.get('/', (req, res) => {
    return res
        .status(200)
        .json(service.findAll())
});

// Find specific training
TrainingController.get("/:id", (req, res) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
        throw new BadRequestException("Bad ID");
    }

    const t = service.findOne(id);
    if (!t) {
        throw new NotFoundException("Training Not Found");
    }

    return res
        .status(200)
        .json(t)
});

// Create training
TrainingController.post('/', (req, res) => {
    const newTraining = service.create(req.body);

    return res
        .status(201)
        .json(newTraining)
})

// Update Training
TrainingController.patch('/:id', (req, res) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
        throw new BadRequestException('Bad ID');
    }

    const UpdatedTraining = service.update(req.body, id);

    return res
        .status(200)
        .json(UpdatedTraining)
})

// Delete Training
TrainingController.delete("/:id", (req, res) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
        throw new BadRequestException('Bad ID');
    }

    return res
        .status(200)
        .json(service.delete(id))
})

// We expose our controller to use it into `src/index.ts`
export { TrainingController }