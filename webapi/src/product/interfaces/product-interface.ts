import { Document } from 'mongoose';

export interface IProduct extends Document {
    readonly productName: string;
    readonly price: number;
}