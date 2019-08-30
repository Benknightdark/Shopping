import * as mongoose from 'mongoose';
import { OrderStatus } from '../interfaces/order-status';

export const orderSchema = new mongoose.Schema(
    {
         userName: String,
     productName: String,
     count: Number,
     price: Number,
     orderStatus: String
    }
);