import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Client } from "src/client/client.entity";

@Entity({ name: "product" })
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'name', type: 'varchar', length: 150 })
    name: string;

    @Column({ name: 'description', type: 'varchar', length: 150 })
    description: string;

    @Column({ name: 'price', type: 'number', length: 50 })
    price: number;

    @Column({ name: 'stock', type: 'number', length: 30 })
    stock: number;

    @Column({ name: 'expirationDate', type: 'date', length: 8 })
    expirationDate: Date;

    @Column({ name: 'measureUnit', type: 'string', length: 5 })
    measureUnit: string;

    @ManyToOne(type => Client, client => client.product)
    @JoinColumn({ name: "client_id" })
    client: Client;
}