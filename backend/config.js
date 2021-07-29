import dotenv from 'dotenv';

dotenv.config();
const config = {
    MONGODB_URL: process.env.MONGODB_URL||'mongodb://localhost/comparison-shopping',
    JWT_SECRET: process.env.JWT_SECRET|| 'somethingsecret',
    PORT: process.env.PORT || 5000
}

export default config;