import { Injectable } from "@nestjs/common";
import { Client } from "./client.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class ClientService {

    constructor(
        @InjectRepository(Client)
        private repository: Repository<Client>) { }

    async create(client: Client) {
        return this.repository.create(client);
    }

	async update(client: Client) {
    	return this.repository.update(client);
 	}

  	async save(client: Client) {
    	return this.repository.save(client);
  	}

    async delete(client: Client) {
        return this.repository.delete(client);
     }

    async findById(id: number) {
        return this.repository.findOne(id);
    }

    async findAll() {
        return this.repository.find();
    }
}