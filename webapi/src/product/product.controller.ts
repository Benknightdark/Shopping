import { Controller, Post, Body, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './dto/product-dto';
import { IProduct } from './interfaces/product-interface';
import { Observable } from 'rxjs';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Post()
    async create(@Body() createProductDto: ProductDto) {
        this.productService.create(createProductDto);
    }

    @Get()
     findAll(): Observable<IProduct[]> {
        return this.productService.findAll();
    }
}
