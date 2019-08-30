import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
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

    @Delete(':id')
    async delete(@Param('id') id: string) {
        this.productService.deleteById(id);
    }

    @Get()
    findAll(): Observable<IProduct[]> {
        return this.productService.findAll();
    }
    @Get(':id')
    findById(@Param('id') id: string): Observable<IProduct> {
        return this.productService.findById(id);
    }
}
