import { Connection } from "mongoose";
import { ProductSchema } from "./schemas/product-schema";

export const productProvider = [
    {
        provide: 'PRODUCT_MODEL',
        useFactory: (connection: Connection) => connection.model('Product', ProductSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];