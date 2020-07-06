import { Controller, Body, Post, Get, Put, Delete, Param } from "@nestjs/common";
import { ProductStockService } from "./productStock.service";
import { ProductStock } from "./productStock.entity";

@Controller("productStock")
export class ProductStockController {

    constructor(private readonly service: ProductStockService) { }

    @Get()
    async findAll() {
        return await this.service.findAll();
    }

    @Get(":id")
    async findById(@Param() id: number) { 
        return this.service.findById(id);
    }

	@Put()
  	async update(@Body() productStock: ProductStock) {
        return this.service.update(productStock);
    }
}