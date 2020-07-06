import { IsInt, IsString, MaxLength, MinLength, IsNumber } from "class-validator";
import { Optional } from "@nestjs/common";

export class ClientDto {

    id:number;

    @IsString({message: "O campo inserido não é válido"})
    @MinLength(2, {message: "O campo name precisa conter 2 caracteres" })
    @MaxLength(30, {message: "O campo name pode conter até 50 caracteres" })
    name: string;

    @IsString({message: "O campo inserido não é válido"})
    @MaxLength(14, { message: "O campo cpf deve ter no máximo 14 caracteres" })
    cpf: string;

    @IsString({ message: "O campo inserido não é válido" })
    @MaxLength(12, { message: "O campo rg deve ter no máximo 12 caracteres" })
    rg: string;

    @IsString({ message: "O campo inserido não é válido" })
    @MinLength(2, { message: "O campo address precisa conter 2 caracteres" })
    @MaxLength(35, { message: "O campo address deve ter no máximo 75 caracteres" })
    address: string;

    @IsString({ message: "O campo inserido não é válido" })
    @MinLength(2, { message: "O campo district precisa conter 2 caracteres" })
    @MaxLength(35, { message: "O campo district deve ter no máximo 50 caracteres" })
    district: string;

    @IsString({ message: "O campo inserido não é válido" })
    @MinLength(2, { message: "O campo city precisa conter 2 caracteres" })
    @MaxLength(35, { message: "O campo city deve ter no máximo 50 caracteres" })
    city: string;

    @IsString({ message: "O campo inserido não é válido" })
    @MaxLength(35, { message: "O campo cep deve ter no máximo 9 caracteres" })
    cep: string;
}