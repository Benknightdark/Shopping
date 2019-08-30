import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { DatabaseModule } from 'src/database/database.module';
import { OrderProvider as orderProvider } from './order-provider';

@Module({
  imports: [DatabaseModule],

  controllers: [OrderController],
  providers: [OrderService,...orderProvider]
})
export class OrderModule { }
