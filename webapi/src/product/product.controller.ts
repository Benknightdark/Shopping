import { Controller, Post, Body, Get, Param, Delete, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './dto/product-dto';
import { IProduct } from './interfaces/product-interface';
import { Observable } from 'rxjs';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }
    /**
     * 新增資料
     *
     * @param {ProductDto} createProductDto
     * @returns {Observable<IProduct>}
     * @memberof ProductController
     */
    @Post()
    create(@Body() createProductDto: ProductDto): Observable<IProduct> {
        const data = this.productService.create(createProductDto);
        return data;
    }

    /**
     *
     * 更新資料
     * @param {string} id
     * @param {ProductDto} createProductDto
     * @returns {Observable<number>}
     * @memberof ProductController
     */
    @Put(':id')
    update(@Param('id') id: string, @Body() createProductDto: ProductDto): Observable<number> {
        const data = this.productService.update(id, createProductDto);
        return data;
    }

    /**
     *
     * 刪除資料
     * @param {string} id
     * @memberof ProductController
     */
    @Delete(':id')
    async delete(@Param('id') id: string) {
        this.productService.deleteById(id);
    }
    @Delete()
    async deleteAll() {
        this.productService.deleteAll();
    }

    /**
     * 取得全部資料
     *
     * @returns {Observable<IProduct[]>}
     * @memberof ProductController
     */
    @Get()
    findAll(): Observable<IProduct[]> {
        return this.productService.findAll();
    }


    /**
     *
     * 取得指定id的資料
     * @param {string} id
     * @returns {Observable<IProduct>}
     * @memberof ProductController
     */
    @Get(':id')
    findById(@Param('id') id: string): Observable<IProduct> {
        return this.productService.findById(id);
    }
}
