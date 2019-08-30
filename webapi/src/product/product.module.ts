import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { productProvider } from './product-provider';
import { ProductService } from './product.service';
import { DatabaseModule } from '../database/database.module';


@Module({
  imports: [DatabaseModule],

  controllers: [ProductController],

  providers: [...productProvider, ProductService]
})
export class ProductModule {}
