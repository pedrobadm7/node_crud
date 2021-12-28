import { Router } from 'express';
import { CreateCategoryController } from './controllers/CreateCategoryController';

const router = Router();

router.post("/categories", new CreateCategoryController().handle)

export { router };