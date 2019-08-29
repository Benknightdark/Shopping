import * as mongoose from 'mongoose';

export const CatSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
});
export interface Cat{
  name: String,
  age: Number,
  breed: String,
}
export class CreateCatDto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}