import { IsInt, IsString, MaxLength, MinLength, IsNumber, IsDate } from "class-validator";
import { Optional } from "@nestjs/common";

export class ClientDto {

    id:number;

    @IsString({message: "O campo inserido não é válido"})
    @MinLength(2, {message: "O campo name precisa conter 2 caracteres" })
    @MaxLength(150, {message: "O campo name pode conter até 150 caracteres" })
    name: string;

    @IsString({message: "O campo inserido não é válido"})
    @MinLength(2, {message: "O campo description precisa conter 2 caracteres" })
    @MaxLength(150, {message: "O campo description precisa conter menos de 150 caracteres"})
    description: string;

    @IsNumber({ message: "O campo inserido não é válido" })
    @MinLength(3, { message: "O campo price precisa conter 3 caracteres" })
    @MaxLength(50, { message: "O campo price deve ter no máximo 50 caracteres" })
    price: number;

    @IsNumber({ message: "O campo inserido não é válido" })
    @MinLength(1, { message: "O campo stock precisa conter 1 caractere" })
    @MaxLength(30, { message: "O campo stock deve ter no máximo 30 caracteres" })
    stock: number;

    @IsDate({ message: "O campo inserido não é válido" })
    expirationDate: Date;

    @IsString({ message: "O campo inserido não é válido" })
    @MinLength(1, { message: "O campo measureUnit precisa conter 1 caractere" })
    @MaxLength(5, { message: "O campo measureUnit deve ter no máximo 5 caracteres" })
    measureUnit: string;
}