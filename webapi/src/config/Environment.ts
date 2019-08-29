export const mongoDBConnection = process.env.NODE_ENV === 'production' ? process.env.mongoDBConnection : 'mongodb://root:example@localhost:9269';
