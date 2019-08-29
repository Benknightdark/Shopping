export const mongoDBConnection = process.env.NODE_ENV === 'production' ? process.env.mongoDBConnection : 'mongodb://root:example@localhost:9269';
export const redisConnection = process.env.NODE_ENV === 'production' ? process.env.redisConnection : 'redis://localhost:1769';
