import { Injectable, Inject } from '@nestjs/common';
import { Model, Query } from 'mongoose';
import { ProductDto } from './dto/product-dto';
import { IProduct } from './interfaces/product-interface';
import { Observable, from } from 'rxjs';

@Injectable()
export class ProductService {

    constructor(@Inject('PRODUCT_MODEL') private readonly productModel: Model<IProduct>) { }

    create(createCatDto: ProductDto): Observable<IProduct> {
       // const createdProduct = new this.productModel(createCatDto).save();
        const $createdCat = from(new this.productModel(createCatDto).save());
        return $createdCat;
    }
    update(id: string, createCatDto: ProductDto): Observable<number> {
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
        this.productModel.findByIdAndDelete(id).exec();
        // return data;
    }
    deleteAll(): void {
        this.productModel.deleteMany({}).exec();
        // return data;
    }
}
