import * as mongoose from 'mongoose';
import { mongoDBConnection } from 'src/config/Environment';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(mongoDBConnection),
  },
];