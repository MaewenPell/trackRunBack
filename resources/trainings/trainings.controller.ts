import { response, Router } from "express";
import { TrainingModel, TrainingService } from "./trainings.service";
import { BadRequestException, NotFoundException } from "~~/utils/exceptions";
import { DateTime } from "luxon";

// We use a Express Router, allowing us to create routes outside src/index.ts
const TrainingController = Router();

const service = new TrainingService();

// Find ALL trainings
TrainingController.get('/', async (req, res) => {
    const results = await TrainingModel.find({});

    try {
        res.send(results);
    } catch (error) {
        res.status(500).send(error);
    }
});

// // Find specific training
// TrainingController.get("/:id", (req, res) => {
//     const id = Number(req.params.id);

//     if (!Number.isInteger(id)) {
//         throw new BadRequestException("Bad ID");
//     }

//     const t = service.findOne(id);
//     if (!t) {
//         throw new NotFoundException("Training Not Found");
//     }

//     return res
//         .status(200)
//         .json(t)
// });

// Create training
TrainingController.post('/', async (req, res) => {
    // const training = { id: 1, km: 48, type: "B", training_week: 1, start_date: DateTime.fromObject({ year: 2023, month: 2, day: 6 }).toISO() }

    const t = new TrainingModel({
        km: req.body.km,
        start_date: DateTime.fromFormat(req.body.startDate, "yyyy-mm-dd").toISO(), 
        training_week: 0,
        type: req.body.type
    });

    try {
        await t.save();
        res.send(t);
    } catch (error) {
        res.status(500).send(error);
    }
})

// // Delete Training
// TrainingController.delete("/:id", (req, res) => {
//     const id = Number(req.params.id);

//     if (!Number.isInteger(id)) {
//         throw new BadRequestException('Bad ID');
//     }

//     return res
//         .status(200)
//         .json(service.delete(id))
// })

// We expose our controller to use it into `src/index.ts`
export { TrainingController }