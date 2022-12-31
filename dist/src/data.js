"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trainings = void 0;
const luxon_1 = require("luxon");
// MOCK
exports.trainings = [
    { id: 1, km: 48, type: "B", training_week: 1, start_date: luxon_1.DateTime.fromObject({ year: 2023, month: 2, day: 6 }).toISO() },
    { id: 2, km: 51, type: "B", training_week: 2, start_date: luxon_1.DateTime.fromObject({ year: 2023, month: 2, day: 13 }).toISO() },
    { id: 3, km: 60, type: "B", training_week: 3, start_date: luxon_1.DateTime.fromObject({ year: 2023, month: 2, day: 20 }).toISO() },
];
