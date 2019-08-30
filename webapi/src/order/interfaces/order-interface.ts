import { OrderStatus } from "./order-status";
import { Document } from "mongoose";

export interface IOrder extends Document {
    userName: String,
    productName: String,
    count: Number,
    price: Number,
    orderStatus: OrderStatus
}