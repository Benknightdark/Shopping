import { OrderStatus } from "./order-status";
import { Document } from "mongoose";

export interface IOrder extends Document {
    userName: string,
    productName: string,
    count: number,
    price: number,
    orderStatus: OrderStatus
}