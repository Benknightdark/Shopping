import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatSchema } from './schemas/cat.schema';
import { mongoDBConnection } from './config/Environment';
@Module({
  imports: [
    MongooseModule
      .forRoot(mongoDBConnection),
    MongooseModule
      .forFeature([{ name: 'Cat', schema: CatSchema }])

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
