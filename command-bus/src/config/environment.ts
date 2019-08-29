export const redisConnection = process.env.NODE_ENV === 'production' ? process.env.redisConnection : 'redis://localhost:1769';
