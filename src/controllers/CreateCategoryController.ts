import { Request, Response } from "express"
import { CreateCategoryService } from "../services/CreateCategoryService";

export class CreateCategoryController {
    async handle(request: Request, response: Response) {
        //Pegamos de dentro do request.body os dados que queremos receber
        const { name, description } = request.body;

        //Criamos uma nova instancia da classe CreateCategoryService
        const service = new CreateCategoryService();

        //Chamamos o método execute que irá receber os dados do request.body e retornar uma categoria ou um erro
        const result = await service.execute({name, description})

        //Se o resultado for uma instancia do erro, retornamos um response com status 400 e o erro. Caso contrário executamos a regra de negócio e retornamos o result.
        if(result instanceof Error) {
            return response.status(400).json({message: result.message})
        }
        return response.json(result);
    }
}