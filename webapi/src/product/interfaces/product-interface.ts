import { Document } from 'mongoose';

export interface IProduct extends Document {
     productName: string;//readonly
     price: number;//readonly
}