import { Controller, Post, Body, Put, Delete, Get, Param } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderDTO } from './dto/order-dto';
import { Observable } from 'rxjs';
import { IOrder } from './interfaces/order-interface';

@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) { }

    @Post()
    create(@Body() createProductDto: OrderDTO): Observable<IOrder> {
        const data = this.orderService.create(createProductDto);
        return data;
    }


    @Put(':id')
    update(@Param('id') id: string, @Body() createProductDto: OrderDTO): Observable<number> {
        const data = this.orderService.update(id, createProductDto);
        return data;
    }


    @Delete(':id')
    async delete(@Param('id') id: string) {
        this.orderService.deleteById(id);
    }
    @Delete()
    async deleteAll() {
        this.orderService.deleteAll();
    }


    @Get()
    findAll(): Observable<IOrder[]> {
        return this.orderService.findAll();
    }



    @Get(':id')
    findById(@Param('id') id: string): Observable<IOrder> {
        return this.orderService.findById(id);
    }
}
