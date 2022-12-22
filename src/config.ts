import cors from 'cors';

export const config = {
    API_PORT: 3000
}

const allowedOrigins = ['http://localhost:4200'];

export const options: cors.CorsOptions = {
    origin: allowedOrigins
};
