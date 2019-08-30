import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { ProductDto } from './dto/product-dto';
import { IProduct } from './interfaces/product-interface';
import { Observable, of, from } from 'rxjs';

@Injectable()
export class ProductService {

    constructor(@Inject('PRODUCT_MODEL') private readonly productModel: Model<IProduct>) { }

    create(createCatDto: ProductDto): Observable<IProduct> {
        const createdProduct = new this.productModel(createCatDto);
        const $createdCat = from(createdProduct.save());
        return $createdCat;
    }

    findAll(): Observable<IProduct[]> {
        const data = from(this.productModel.find().exec());
        return data;
    }
}
