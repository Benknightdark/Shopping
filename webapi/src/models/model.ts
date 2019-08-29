export class Product {
    public productName: string;
    public price: number;
}

export class Order {
    public userName: string;
    public productName: string;
    public count: number;
    public price: number;
    public orderStatus: OrderStatus

}

export class OrderView {
    public userName: string;
    public productName: string;
    public count: number;
    public price: number;
    public orderStatus: OrderStatus
}

export enum OrderStatus {
    create,
    pick,
    ship,
    payed
}
