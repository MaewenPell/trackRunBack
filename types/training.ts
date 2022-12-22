export interface Training {
    id: number,
    training_week: number,
    km: number,
    type: 'B' | 'I' | 'S' | 'R' | 'T' | 'G',
    start_date: string;
}