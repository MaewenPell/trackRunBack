import cors from 'cors'
import express from 'express'
import { config, options } from '~/config'
import { TrainingController } from '~~/resources/trainings/trainings.controller'
import { UnknownRoutesHandler } from '~~/middlewares/unknownRoutes.handler'

const app = express();

app.use(cors(options));

app.use(express.json());

app.use('/trainings', TrainingController);

app.all('*', UnknownRoutesHandler);

app.listen(config.API_PORT, () => console.log(`Listening on ${config.API_PORT}`));