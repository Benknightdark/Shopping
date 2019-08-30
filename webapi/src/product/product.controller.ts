import { Controller, Post, Body, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './dto/product-dto';
import { IProduct } from './interfaces/product-interface';

@Controller('product')
export class ProductController {
    constructor(private readonly catsService: ProductService) {}

    @Post()
    async create(@Body() createCatDto: ProductDto) {
      this.catsService.create(createCatDto);
    }
  
    @Get()
    async findAll(): Promise<IProduct[]> {
      return this.catsService.findAll();
    }
}
