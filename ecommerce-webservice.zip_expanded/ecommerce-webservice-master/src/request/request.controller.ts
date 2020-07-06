import { Controller, Body, Post, Get, Put, Delete, Param } from "@nestjs/common";
import { RequestService } from "./request.service";
import { Request } from "./request.entity";

@Controller("request")
export class RequestController {

    constructor(private readonly service: RequestService) { }

    @Get()
    async findAll() {
        return await this.service.findAll();
    }

    @Get(":id")
    async findById(@Param() id: number) { 
        return this.service.findById(id);
    }

  	@Post()
  	async save(@Body() request: Request) {
    	return this.service.save(request);
  	}

	@Post()
    async create(@Body() request: Request) {
        return this.service.create(request);
    }

	@Put()
  	async update(@Body() request: Request) {
        return this.service.update(request);
    }

	@Delete()
  	async delete(@Body() request: Request) {
    	return this.service.delete(request);
  	}
}