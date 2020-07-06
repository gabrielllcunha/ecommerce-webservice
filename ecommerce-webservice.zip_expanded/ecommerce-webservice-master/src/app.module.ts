import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientController } from './client/client.controller';
import { ClientService } from './client/client.service';
import { Client } from './client/client.entity';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { Product } from './product/product.entity';
import { RequestController } from './request/request.controller';
import { RequestService } from './request/request.service';
import { Request } from './request/request.entity';
import { ProductStockController } from './productStock/productStock.controller';
import { ProductStockService } from './productStock/productStock.service';
import { ProductStock } from './productStock/productStock.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'ecommerce-webservice',
      entities: [
        Client,
        Product,
		Request,
		ProductStock
      ],
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature([
      	Client,
      	Product,
		Request,
		ProductStock
    ])
  ],
  controllers: [
    ClientController,
	ProductController,
	RequestController,
	ProductStockController
  ],
  providers: [
    ClientService,
	ProductService,
	RequestService,
	ProductStockService
  ],
})
export class AppModule {}
