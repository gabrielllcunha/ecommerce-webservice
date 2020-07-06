import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Client } from "src/client/client.entity";

@Entity({ name: "request" })
export class Request {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'code', type: 'number', length: 25 })
    code: number;

    @Column({ name: 'date', type: 'date', length: 8 })
    date: Date;

    @Column({ name: 'deliveryDate', type: 'date', length: 8 })
    deliveryDate: Date;

    @Column({ name: 'shipping', type: 'varchar', length: 50 })
    shipping: string;

    @Column({ name: 'totalValue', type: 'number', length: 50 })
    totalValue: number;

    @Column({ name: 'productsValue', type: 'number', length: 50 })
    productsValue: number;

    @Column({ name: 'discountValue', type: 'number', length: 50 })
    discountValue: number;

    @Column({ name: 'client', type: 'varchar', length: 50 })
    client: string;

    @Column({ name: 'deliveryAddress', type: 'varchar', length: 100 })
    deliveryAddress: string;

    @ManyToOne(type => Client, client => cliebt.request)
    @JoinColumn({ name: "client_id" })
    client: Client;
}