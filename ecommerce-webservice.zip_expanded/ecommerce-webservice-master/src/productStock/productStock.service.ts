import { Injectable } from "@nestjs/common";
import { Product } from "../product/product.entity";
import { ProductStock } from "./productStock.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class ProductStockService {

    constructor(
        @InjectRepository(ProductStock)
        private repository: Repository<ProductStock>) { }

	async update(productStock: ProductStock) {
    	return this.repository.update(productStock);
 	}

  	async save(productStock: ProductStock) {
    	return this.repository.save(productStock);
  	}

    async findById(id: number) {
        return this.repository.findOne(id);
    }

    async findAll() {
        return this.repository.find();
    }
}