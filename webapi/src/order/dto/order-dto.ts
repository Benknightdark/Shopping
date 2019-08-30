import { OrderStatus } from "../interfaces/order-status";

export class OrderDTO {
    userName: String;
    productName: String;
    count: Number;
    price: Number;
    orderStatus: OrderStatus
}