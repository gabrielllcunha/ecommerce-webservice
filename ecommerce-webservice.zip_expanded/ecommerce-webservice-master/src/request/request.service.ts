import { Injectable } from "@nestjs/common";
import { Request } from "./request.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class RequestService {

    constructor(
        @InjectRepository(Request)
        private repository: Repository<Request>) { }

	async create(request: Request) {
        return this.repository.create(request);
    }

	async update(request: Request) {
    	return this.repository.update(request);
 	}

  	async save(request: Request) {
    	return this.repository.save(request);
  	}

    async delete(request: Request) {
        return this.repository.delete(request);
     }

    async findById(id: number) {
        return this.repository.findOne(id);
    }

    async findAll() {
        return this.repository.find();
    }
}