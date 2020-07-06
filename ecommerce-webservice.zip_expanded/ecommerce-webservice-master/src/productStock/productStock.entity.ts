import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, UpdateDateColumn, CreateDateColumn, } from "typeorm";
import { Product } from "../product/product.entity";

@Entity({ name: "productStock" })
export class ProductStock {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'name', type: 'varchar', length: 150 })
    name: string;

    @Column({ name: 'quantity', type: 'number', length: 50 })
    quantity: number;

    @CreateDateColumn({ name: 'date', type: 'date', length: 8 })
    created: Date;

    @UpdateDateColumn({ name: 'date', type: 'date', length: 8 })
    updated: Date;

    @ManyToOne(type => Product, product => product.stock)
    @JoinColumn({ name: "product_id" })
    product: Product;
}