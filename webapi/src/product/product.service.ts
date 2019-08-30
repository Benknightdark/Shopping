import { Injectable, Inject } from '@nestjs/common';
import { Model, Query } from 'mongoose';
import { ProductDto } from './dto/product-dto';
import { IProduct } from './interfaces/product-interface';
import { Observable, of, from } from 'rxjs';
import { DeleteWriteOpResultObject } from 'mongodb';

@Injectable()
export class ProductService {

    constructor(@Inject('PRODUCT_MODEL') private readonly productModel: Model<IProduct>) { }

    create(createCatDto: ProductDto): Observable<IProduct> {
        const createdProduct = new this.productModel(createCatDto);
        const $createdCat = from(createdProduct.save());
        return $createdCat;
    }
    update(id: string, createCatDto: ProductDto): Observable<number> {
        // const createdProduct = new this.productModel(createCatDto);
        // createdProduct.update()
        // const $createdCat = from(createdProduct.update());
        // return $createdCat;
        const isUpdate = from(this.productModel.findById(id).update(createCatDto).exec());
        return isUpdate;
    }

    findAll(): Observable<IProduct[]> {
        const data = from(this.productModel.find().exec());
        return data;
    }
    findById(id: string): Observable<IProduct> {
        const data = from(this.productModel.findById(id).exec());
        return data;
    }
    deleteById(id: string): void {
        this.productModel.deleteOne(id).exec();
        // return data;
    }
}
