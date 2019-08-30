import { Connection } from "mongoose";
import { orderSchema } from "./schemas/order-schema";


export const OrderProvider = [
    {
        provide: 'ORDER_MODEL',
        useFactory: (connection: Connection) => connection.model('Order', orderSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];