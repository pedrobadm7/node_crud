import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid} from "uuid";

@Entity("categories") //Responsável por informar que a classe referenciará uma tabela
export class Category {

    @PrimaryColumn() //Chave primária
    id: string;

    @Column({name: "name_category"}) //Coluna
    name: string;

    @Column() //Coluna
    description: string;

    @CreateDateColumn() //Coluna de data de criação
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}