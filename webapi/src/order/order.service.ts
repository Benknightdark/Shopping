import { Injectable, Inject } from '@nestjs/common';
import { IService } from 'src/utils/service-interface';
import { IOrder } from './interfaces/order-interface';
import { OrderDTO } from './dto/order-dto';
import { Observable, from } from 'rxjs';
import { Model, Document } from 'mongoose';

@Injectable()
export class OrderService implements IService<IOrder, OrderDTO>{

    constructor(@Inject('ORDER_MODEL') private readonly orderModel: Model<IOrder>) { }
    deleteById(id: string): void {
        this.orderModel.findByIdAndDelete(id).exec();
    }
    create(ordertDto: OrderDTO): Observable<IOrder> {
        const $createdCat = from(new this.orderModel(ordertDto).save());
        return $createdCat;
    }
    update(id: string, createCatDto: OrderDTO): Observable<number> {
        const isUpdate = from(this.orderModel.findById(id).update(createCatDto).exec());

        return isUpdate;
    }
    findAll(): Observable<IOrder[]> {
        const data = from(this.orderModel.find().exec());
        return data;
    }
    findById(id: string): Observable<IOrder> {
        const data = from(this.orderModel.findById(id).exec());
        return data;
    }
    deleteAll(): void {
        this.orderModel.deleteMany({}).exec();
    }
}





