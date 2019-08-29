import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/common/enums/transport.enum';
import { Logger } from '@nestjs/common';
import { redisConnection } from './config/environment';

async function bootstrap() {
  // const app = await NestFactory.createMicroservice(AppModule, { // 改為建立microservice
  //   transport: Transport.REDIS,
  //   options: {
  //     url: 'redis://nestjsrr.redis.cache.windows.net:6380,password=INW2Pbm+gWtyjPwej4DUxtmaMtN7mC5w8AJIlhElKF0=,ssl=True,abortConnect=False',
  //     retryAttempts: 5, // 對外request重試次數
  //     retryDelay: 1000, // 重試間隔
  //   }
  // });
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.REDIS,
    options: {
      url: redisConnection,
      retryAttempts: 5, // 對外request重試次數
      retryDelay: 1000, // 重試間隔
    },
  });
  app.listen(() => Logger.log('gogogog'));
}
bootstrap();
