import { Injectable } from "@nestjs/common";
import { Product } from "./product.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class ProductService {

    constructor(
        @InjectRepository(Product)
        private repository: Repository<Product>) { }

    async create(product: Product) {
        return this.repository.create(product);
    }

	async update(product: Product) {
    	return this.repository.update(product);
 	}

  	async save(product: Product) {
    	return this.repository.save(product);
  	}

    async delete(product: Product) {
        return this.repository.delete(product);
     }

    async findById(id: number) {
        return this.repository.findOne(id);
    }

    async findAll() {
        return this.repository.find();
    }
}