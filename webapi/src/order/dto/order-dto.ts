import { OrderStatus } from "../interfaces/order-status";

export class OrderDTO {
    userName: string;
    productName: string;
    count: number;
    price: number;
    orderStatus: OrderStatus
}