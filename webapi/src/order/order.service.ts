import { Injectable, Inject } from '@nestjs/common';
import { IService } from 'src/utils/service-interface';
import { IOrder } from './interfaces/order-interface';
import { OrderDTO } from './dto/order-dto';
import { Observable, from } from 'rxjs';
import { Model, Document } from 'mongoose';

@Injectable()
export class OrderService implements IService<IOrder, OrderDTO>{
    constructor(@Inject('ORDER_MODEL') private readonly productModel: Model<IOrder>) { }

    create(createCatDto: OrderDTO): Observable<IOrder> {
        const $createdCat = from(new this.productModel(createCatDto).save());
        return $createdCat;
    }
    update(id: string, createCatDto: OrderDTO): Observable<number> {
        const isUpdate = from(this.productModel.findById(id).update(createCatDto).exec());

        return isUpdate;
    }
    findAll(): Observable<IOrder[]> {
        const data = from(this.productModel.find().exec());
        return data;
    }
    findById(id: string): Observable<IOrder> {
        const data = from(this.productModel.findById(id).exec());
        return data;
    }
    deleteAll(): void {
        this.productModel.deleteMany({}).exec();
    }
}





