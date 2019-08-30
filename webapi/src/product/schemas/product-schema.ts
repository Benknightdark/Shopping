import * as mongoose from 'mongoose';
import { IProduct } from '../interfaces/product-interface';

export const ProductSchema = new mongoose.Schema(
    {
        productName: String,
        price: Number
    }
);