import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { productProvider } from './product-provider';
import { DatabaseModule } from 'src/database/database.module';
import { ProductService } from './product.service';


@Module({
  imports: [DatabaseModule],

  controllers: [ProductController],

  providers: [...productProvider, ProductService]
})
export class ProductModule {}
