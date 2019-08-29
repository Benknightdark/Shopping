// import { Controller, Get, Post, Body, Param, Injectable } from '@nestjs/common';
// import { AppService } from './app.service';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { Cat, CreateCatDto } from './schemas/cat.schema';
// import { Client, Transport, ClientProxy } from '@nestjs/microservices';
// import { redisConnection } from './config/Environment';
// import { Observable } from 'rxjs';
// // @Injectable()

// // @Controller('Cat')
// // export class AppController {
// //   constructor(
// //     @InjectModel('CAT_MODEL') private readonly catModel: Model<Cat>,
// //   ) { }
// //   @Post()
// //   async create(@Body() createCatDto: CreateCatDto): Promise<Cat> {
// //     const createdCat = new this.catModel(createCatDto);
// //     return await createdCat.save();
// //   }
// //   @Get()
// //   async findAll(): Promise<Cat[]> {
// //     return await this.catModel.find().exec();
// //   }

// //   @Client({
// //     transport: Transport.REDIS,
// //     options: {
// //       url: redisConnection,
// //     },
// //   })
// //   redisClient: ClientProxy;
// //   @Get('command/:text')
// //    command(@Param('text') text: string): Observable<string> {
// //     const a: Observable<string> =  this.redisClient.send({ command: 'hi' }, text);
// //     return a;
// //   }
// // }
