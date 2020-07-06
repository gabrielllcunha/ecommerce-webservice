import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Request } from "src/request/request.entity";

@Entity({ name: "client" })
export class Client {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'name', type: 'varchar', length: 50 })
    name: string;

    @Column({ name: 'cpf', type: 'varchar', length: 14 })
    cpf: string;

    @Column({ name: 'rg', type: 'varchar', length: 12 })
    rg: string;

	@Column({ name: 'address', type: 'varchar', length: 75 })
    address: string;

	@Column({ name: 'district', type: 'varchar', length: 50 })
    district: string;

	@Column({ name: 'city', type: 'varchar', length: 50 })
    city: string;

	@Column({ name: 'cep', type: 'varchar', length: 9 })
    cep: string;

    @ManyToOne(type => Request, request => request.client)
    @JoinColumn({ name: "client_id" })
    request: Request;
}