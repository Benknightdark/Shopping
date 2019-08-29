import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat, CreateCatDto } from './schemas/cat.schema';

@Controller('Cat')
export class AppController {
  constructor(
              @InjectModel('Cat') private readonly catModel: Model<Cat>,
  ) { }
  @Post()
  async create(@Body() createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return await createdCat.save();
  }
  @Get()
  async findAll(): Promise<Cat[]> {
    return await this.catModel.find().exec();
  }
}
