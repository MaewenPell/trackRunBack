import { DateTime } from "luxon";
import type { Training } from "~~/types/training";

// MOCK
export const trainings: Training[] = [
    { id: 1, km: 48, type: "B", training_week: 1, start_date: DateTime.fromObject({ year: 2023, month: 2, day: 6 }).toISO() },
    { id: 2, km: 51, type: "B", training_week: 2, start_date: DateTime.fromObject({ year: 2023, month: 2, day: 13 }).toISO() },
    { id: 3, km: 60, type: "B", training_week: 3, start_date: DateTime.fromObject({ year: 2023, month: 2, day: 20 }).toISO() },
]

