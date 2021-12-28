import { getRepository } from "typeorm"
import { Category } from "../entities/Category";

type CategoryRequest = {
    name: string;
    description: string;
}

export class CreateCategoryService {
    
    async execute({ name, description }: CategoryRequest ): Promise<Category | Error> {
        //Criar um repositório que será responsável por fazer a comunicação com o DB. Este repo receberá um getRepositoy e iremos injetar a entidade de categoria
        const repo = getRepository(Category);

        //Verifica se a categoria já existe no DB. Dentro do repo ele irá o atributo através do .findOne(). Se já existir, irá retornar um erro.
        if(await repo.findOne({name})) {
            return new Error("Category already exists")
        }

        //repo.create irá criar um objeto de categoria para podermos salvar, pois o TypeORM não consegue criar de forma mais automática. Não necessita do await pois não retorna uma promise
        const category = repo.create({
            name,
            description
        })

        //Salvar o objeto de categoria e depois a retornamos
        await repo.save(category);

        return category;
    }
}