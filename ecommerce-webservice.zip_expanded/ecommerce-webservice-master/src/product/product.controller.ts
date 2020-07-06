import { Controller, Body, Post, Get, Put, Delete, Param } from "@nestjs/common";
import { ProductService } from "./product.service";
import { Product } from "./product.entity";

@Controller("product")
export class ProductController {

    constructor(private readonly service: ProductService) { }

    @Get()
    async findAll() {
        return await this.service.findAll();
    }

    @Get(":id")
    async findById(@Param() id: number) { 
        return this.service.findById(id);
    }

  	@Post()
  	async save(@Body() product: Product) {
    	return this.service.save(product);
  	}

	@Post()
    async create(@Body() product: Product) {
        return this.service.create(product);
    }

	@Put()
  	async update(@Body() product: Product) {
        return this.service.update(product);
    }

	@Delete()
  	async delete(@Body() product: Product) {
    	return this.service.delete(product);
  	}
}