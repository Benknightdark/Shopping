import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { ProductDto } from './dto/product-dto';
import { IProduct } from './interfaces/product-interface';

@Injectable()
export class ProductService {

    constructor(@Inject('PRODUCT_MODEL') private readonly catModel: Model<IProduct>) { }

    async create(createCatDto: ProductDto): Promise<IProduct> {
        const createdCat = new this.catModel(createCatDto);
        return await createdCat.save();
    }

    async findAll(): Promise<IProduct[]> {
        return await this.catModel.find().exec();
    }
}
