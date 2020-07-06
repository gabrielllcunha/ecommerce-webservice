import { Controller, Body, Post, Get, Put, Delete, Param } from "@nestjs/common";
import { ClientService } from "./client.service";
import { Client } from "./client.entity";

@Controller("client")
export class ClientController {

    constructor(private readonly service: ClientService) { }

    @Get()
    async findAll() {
        return await this.service.findAll();
    }

    @Get(":id")
    async findById(@Param() id: number) { 
        return this.service.findById(id);
    }

  	@Post()
  	async save(@Body() client: Client) {
    	return this.service.save(client);
  	}

	@Post()
    async create(@Body() client: Client) {
        return this.service.create(client);
    }

	@Put()
  	async update(@Body() client: Client) {
        return this.service.update(client);
    }

	@Delete()
  	async delete(@Body() client: Client) {
    	return this.service.delete(client);
  	}
}