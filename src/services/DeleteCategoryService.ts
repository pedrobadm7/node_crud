import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

export class DeleteCategoryService {
    async execute(id: string) {
        const repo = getRepository(Category);

        const category = await repo.findOne(id);

        if(!category) {
            return new Error("Category does not exists, bro :(")
        }

        //Retorna uma promise do DeleteResult
        await repo.delete(id);
    }
}