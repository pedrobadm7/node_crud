import { Router } from 'express';
import { CreateCategoryController } from './controllers/CreateCategoryController';
import { DeleteCategoryController } from './controllers/DeleteCategoryController';
import { GetAllCategoriesController } from './controllers/GetAllCategoriesController';
import { UpdateCategoryController } from './controllers/UpdateCategoryController';

const router = Router();

/**
 * [X] C - CREATE - POST
 * [X] R - READ - GET
 * [X] U - UPDATE - PUT
 * [X] D - DELETE - DELETE
 */

router.post("/categories", new CreateCategoryController().handle)
router.get("/categories", new GetAllCategoriesController().handle)
router.delete("/categories/:id", new DeleteCategoryController().handle)
router.put("/categories/:id", new UpdateCategoryController().handle)

export { router };